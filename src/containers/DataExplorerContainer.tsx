import React, { useEffect, useState } from 'react';
import { getCountries } from '../services/countriesServices';
import { Countries } from '../types/countriesTypes';
import { Result } from '../types/fetchTypes';
import DataExplorerTemplate from '../ui/templates/DataExplorerTemplate';

function DataExplorerContainer(): React.JSX.Element {
  const [countriesResult, setCountriesResult] =
    useState<Result<Countries> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

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

  if (countriesResult?.isSuccess) {
    return (
      <DataExplorerTemplate
        countries={countriesResult.data}
        setSearchValue={setSearchValue}
      />
    );
  }

  return <p>Error</p>;
}

export default DataExplorerContainer;
