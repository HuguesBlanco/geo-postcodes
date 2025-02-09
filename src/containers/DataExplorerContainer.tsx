import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { fetchCountries } from '../services/countriesServices';
import { fetchCountriesStatistics } from '../services/countriesStatsServices';
import { Countries } from '../types/countriesTypes';
import { SummaryData } from '../types/statsTypes';
import DataExplorerLayout from '../ui/layouts/DataExplorerLayout';
import { getIsoList, getMatchingCountries } from '../utils/countriesUtils';

type DataExplorerContainerProps = {
  visitPage: (urlPath: string) => void;
};

function DataExplorerContainer({
  visitPage,
}: DataExplorerContainerProps): React.JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const {
    data: countries,
    isLoading: isCountriesLoading,
    error: countriesError,
  } = useQuery<Countries>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  const filteredCountries = useMemo(() => {
    return countries ? getMatchingCountries(countries, searchValue) : [];
  }, [countries, searchValue]);

  const {
    data: summaryData,
    isFetching: isSummaryDataFetching,
    error: summaryError,
  } = useQuery<SummaryData>({
    queryKey: ['summary', filteredCountries.map((country) => country.iso)],
    queryFn: () => fetchCountriesStatistics(getIsoList(filteredCountries)),
    enabled: filteredCountries.length > 0,
    initialData: [],
  });

  if (isCountriesLoading) {
    return <p>Full container loading...</p>;
  }

  if (countriesError) {
    return <p>Error fetching countries: {countriesError.message}</p>;
  }
  if (summaryError) {
    return <p>Error fetching summary data: {summaryError.message}</p>;
  }

  return (
    <DataExplorerLayout
      countries={filteredCountries}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      visitPage={visitPage}
      isSummaryDataFetching={isSummaryDataFetching}
      summaryData={summaryData}
    />
  );
}

export default DataExplorerContainer;
