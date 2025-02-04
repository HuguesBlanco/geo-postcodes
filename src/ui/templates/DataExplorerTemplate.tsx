import React from 'react';
import { Countries } from '../../types/countriesTypes';
import CountriesList from '../ui/CountriesList';
import DataSummary from '../ui/DataSummary';
import SearchInput from '../ui/SearchInput';

type DataExplorerTemplateProps = {
  countries: Countries;
};

function DataExplorerTemplate({
  countries,
}: DataExplorerTemplateProps): React.JSX.Element {
  console.log(countries);

  return (
    <div className="container mx-auto  flex">
      <div className="flex-2">
        <h1 className="my-6 text-2xl font-black">Data Explorer</h1>
        <CountriesList />
      </div>
      <div className="flex-1">
        <SearchInput />
        <DataSummary />
      </div>
    </div>
  );
}

export default DataExplorerTemplate;
