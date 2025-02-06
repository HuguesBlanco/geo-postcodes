import React from 'react';
import { Countries } from '../../types/countriesTypes';
import CountriesList from '../ui/CountriesList';
import DataSummary from '../ui/DataSummary';
import SearchBar from '../ui/SearchBar';

type DataExplorerTemplateProps = {
  countries: Countries;
  setSearchValue: (searchedValue: string) => void;
};

function DataExplorerTemplate({
  countries,
  setSearchValue,
}: DataExplorerTemplateProps): React.JSX.Element {
  return (
    <div className="container mx-auto  flex">
      <div className="flex-2">
        <h1 className="my-6 text-2xl font-black">Data Explorer</h1>
        <CountriesList countries={countries} />
      </div>
      <div className="flex-1">
        <SearchBar
          placeholder="Search by postcode, locality, or region"
          onChange={setSearchValue}
        />
        <DataSummary />
      </div>
    </div>
  );
}

export default DataExplorerTemplate;
