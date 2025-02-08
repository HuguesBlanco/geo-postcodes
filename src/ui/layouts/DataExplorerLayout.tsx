import React from 'react';
import { Countries } from '../../types/countriesTypes';
import { SummaryData } from '../../types/statsTypes';
import CountryList from '../elements/CountriesList';
import DataSummary from '../elements/DataSummary';
import SearchBar from '../elements/SearchBar';

type DataExplorerLayoutProps = {
  countries: Countries;
  visitPage: (urlPath: string) => void;
  setSearchValue: (searchedValue: string) => void;
  summaryData: SummaryData;
};

function DataExplorerLayout({
  countries,
  visitPage,
  setSearchValue,
  summaryData,
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
        <DataSummary data={summaryData} />
      </div>
    </div>
  );
}

export default DataExplorerLayout;
