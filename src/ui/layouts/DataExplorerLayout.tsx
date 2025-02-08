import React from 'react';
import { TbWorldSearch } from 'react-icons/tb';
import { Countries } from '../../types/countriesTypes';
import { SummaryData } from '../../types/statsTypes';
import CountryList from '../elements/CountriesList';
import DataSummary from '../elements/DataSummary';
import SearchBar from '../elements/SearchBar';

type DataExplorerLayoutProps = {
  countries: Countries;
  visitPage: (urlPath: string) => void;
  searchValue: string;
  setSearchValue: (searchedValue: string) => void;
  summaryData: SummaryData;
};

function DataExplorerLayout({
  countries,
  visitPage,
  searchValue,
  setSearchValue,
  summaryData,
}: DataExplorerLayoutProps): React.JSX.Element {
  return (
    <div className="container mx-auto flex gap-32">
      <div className="flex-2">
        <h1 className="mt-8 mb-2 text-2xl font-black">Data Explorer</h1>
        <div className="flex items-center mb-8">
          <TbWorldSearch />
          <h2>
            Index <span className="text-gray-500">of countries</span>
          </h2>
        </div>
        <CountryList countries={countries} visitPage={visitPage} />
      </div>

      <div className="flex-1">
        <div className="mt-8 mb-16">
          <SearchBar
            placeholder="Search by name, continent, iso, etc"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
        <DataSummary data={summaryData} />
      </div>
    </div>
  );
}

export default DataExplorerLayout;
