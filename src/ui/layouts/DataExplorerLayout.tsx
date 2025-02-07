import React from 'react';
import { Countries } from '../../types/countriesTypes';
import CountryList from '../elements/CountriesList';
import DataSummary from '../elements/DataSummary';
import SearchBar from '../elements/SearchBar';

type DataExplorerLayoutProps = {
  countries: Countries;
  visitPage: (urlPath: string) => void;
  setSearchValue: (searchedValue: string) => void;
};

function DataExplorerLayout({
  countries,
  visitPage,
  setSearchValue,
}: DataExplorerLayoutProps): React.JSX.Element {
  return (
    <div className="container mx-auto  flex">
      <div className="flex-2">
        <h1 className="my-6 text-2xl font-black">Data Explorer</h1>
        <CountryList countries={countries} visitPage={visitPage} />
      </div>
      <div className="flex-1">
        <SearchBar
          placeholder="Search by name, continent, iso, etc"
          onChange={setSearchValue}
        />
        <DataSummary />
      </div>
    </div>
  );
}

export default DataExplorerLayout;
