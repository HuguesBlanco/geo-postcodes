import React from 'react';
import { Countries } from '../../types/countriesTypes';
import { groupCountriesByContinent } from '../../utils/countriesUtils';

type CountriesListProps = {
  countries: Countries;
  visitPage: (urlPath: string) => void;
};

function CountriesList({
  countries,
  visitPage,
}: CountriesListProps): React.JSX.Element {
  const countriesByContinent = groupCountriesByContinent(countries);

  return (
    <div>
      {Object.entries(countriesByContinent).map(
        ([continentName, continentCountries]) => {
          return (
            <div className="mb-8" key={continentName}>
              <h2 className="border-b-2 border-gray-200 pb-2 mb-4 text-2xl">
                {continentName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {continentCountries.map((country) => (
                  <div
                    onClick={() => {
                      visitPage(country.url);
                    }}
                    key={country.iso}
                    className="text-blue-900 cursor-pointer hover:underline transition-colors duration-200"
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}

export default CountriesList;
