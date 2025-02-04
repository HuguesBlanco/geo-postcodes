import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import NavigationContainer from '../containers/NavigationContainer';
import { getCountries } from '../services/countriesServices';
import { Countries } from '../types/countriesTypes';
import { Result } from '../types/fetchTypes';

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

  const dataIds = ['1', '2', '3'];

  return (
    <div>
      <NavigationContainer />
      <h1>Data Explorer</h1>
      <ul>
        {dataIds.map((id) => (
          <li key={id}>
            <Link to={`/data-explorer/${id}`}>Data {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataExplorer;
