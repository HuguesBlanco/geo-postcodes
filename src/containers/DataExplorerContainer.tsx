import React, { useEffect, useMemo, useState } from 'react';
import { getCountries } from '../services/countriesServices';
import { getCountriesStats } from '../services/countriesStatsServices';
import { Countries } from '../types/countriesTypes';
import { FetchResult } from '../types/fetchTypes';
import { SummaryData } from '../types/statsTypes';
import DataExplorerLayout from '../ui/layouts/DataExplorerLayout';
import { getIsoList, getMatchingCountries } from '../utils/countriesUtils';

type DataExplorerContainerProps = {
  visitPage: (urlPath: string) => void;
};

function DataExplorerContainer({
  visitPage,
}: DataExplorerContainerProps): React.JSX.Element {
  const [countriesResult, setCountriesResult] =
    useState<FetchResult<Countries> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = useMemo(
    () =>
      countriesResult?.isSuccess === true
        ? getMatchingCountries(countriesResult.data, searchValue)
        : null,
    [countriesResult, searchValue],
  );

  const [summaryData, setSummaryData] =
    useState<FetchResult<SummaryData> | null>(null);
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);

  // TEMP
  console.log('isSummaryLoading', isSummaryLoading);
  console.log('summaryData', summaryData);

  useEffect(() => {
    setIsLoading(true);

    const { result: countriesResult, abort } = getCountries();

    void countriesResult
      .then((result) => {
        setCountriesResult(result);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return abort;
  }, []);

  useEffect(() => {
    if (filteredCountries !== null) {
      const isoCountryList = getIsoList(filteredCountries);

      const { result: summaryDataResult, abort } =
        getCountriesStats(isoCountryList);

      void summaryDataResult
        .then((summaryData) => {
          setSummaryData(summaryData);
        })
        .finally(() => {
          setIsSummaryLoading(false);
        });

      return abort;
    }

    return undefined;
  }, [filteredCountries, searchValue]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (countriesResult && !countriesResult.isSuccess) {
    return <p>Error: {countriesResult.error.message}</p>;
  }

  if (filteredCountries) {
    return (
      <DataExplorerLayout
        countries={filteredCountries}
        setSearchValue={setSearchValue}
        visitPage={visitPage}
      />
    );
  }

  return <p>Error</p>;
}

export default DataExplorerContainer;
