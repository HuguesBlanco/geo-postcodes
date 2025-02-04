import React, { useEffect, useState } from 'react';
import { getCountries } from '../services/countriesServices';
import { Countries } from '../types/countriesTypes';
import { Result } from '../types/fetchTypes';
import DataExplorerTemplate from '../ui/templates/DataExplorerTemplate';

function DataExplorerContainer(): React.JSX.Element {
  const [countriesResult, setCountriesResult] =
    useState<Result<Countries> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return (
    <>
      {countriesResult !== null && (
        <DataExplorerTemplate countries={countriesResult.data} />
      )}
    </>
  );
}

export default DataExplorerContainer;
