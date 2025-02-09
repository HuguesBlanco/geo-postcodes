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
    <div className="container mx-auto px-4">
      {/* First row: Title and SearchBar */}
      <div className="flex flex-col xl:flex-row gap-x-32 xl:mb-4">
        <div className="basis-full xl:basis-2/3 flex flex-row xl:flex-col content-end gap-x-4 my-8">
          <h1 className="text-2xl font-black mb-1">Data Explorer</h1>
          <div className="flex items-center">
            <TbWorldSearch />
            <h2 className="ml-2">
              Index <span className="text-gray-500">of countries</span>
            </h2>
          </div>
        </div>
        <div className="basis-full xl:basis-1/3 mb-8 xl:mt-12">
          <SearchBar
            placeholder="Search by name, continent, iso, etc"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
      </div>

      {/* Second row: DataSummary and CountryList */}
      <div className="flex flex-col xl:flex-row-reverse gap-x-32">
        <div className="basis-full xl:basis-1/3 mb-8 xl:mt-1">
          <DataSummary data={summaryData} />
        </div>
        <div className="basis-full xl:basis-2/3">
          <CountryList countries={countries} visitPage={visitPage} />
        </div>
      </div>
    </div>
  );
}

export default DataExplorerLayout;
