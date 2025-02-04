import React, { useEffect, useState } from 'react';
import NavigationContainer from '../containers/NavigationContainer';
import { getCountries } from '../services/countriesServices';
import { Countries } from '../types/countriesTypes';
import { Result } from '../types/fetchTypes';
import Page from '../ui/Page';

function DataExplorer(): React.JSX.Element {
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

  console.log(countriesResult);

  return (
    <Page navigationComponent={<NavigationContainer />}>
      <div>Data Explorer</div>
    </Page>
  );
}

export default DataExplorer;
