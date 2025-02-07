import React, { useEffect, useState } from 'react';
import { getCountries } from '../services/countriesServices';
import { Countries } from '../types/countriesTypes';
import { FetchResult } from '../types/fetchTypes';
import DataExplorerLayout from '../ui/layouts/DataExplorerLayout';
import { getMatchingCountries } from '../utils/countriesUtils';

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

  const filteredCountries =
    countriesResult?.isSuccess === true
      ? getMatchingCountries(countriesResult.data, searchValue)
      : null;

  useEffect(() => {
    setIsLoading(true);

    const { countriesResult, abort } = getCountries();

    void countriesResult
      .then((result) => {
        setCountriesResult(result);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return abort;
  }, []);

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
