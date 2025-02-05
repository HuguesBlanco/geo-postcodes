import { Countries, Country } from '../types/countriesTypes';

export function isCountry(data: unknown): data is Country {
  if (typeof data !== 'object' || data === null) return false;

  return (
    'continent' in data &&
    typeof data.continent === 'string' &&
    'iso' in data &&
    typeof data.iso === 'string' &&
    'name' in data &&
    typeof data.name === 'string' &&
    'noPostalCode' in data &&
    typeof data.noPostalCode === 'boolean' &&
    'limited' in data &&
    typeof data.limited === 'boolean' &&
    'notAvailable' in data &&
    typeof data.notAvailable === 'boolean' &&
    'url' in data &&
    typeof data.url === 'string' &&
    'continentCode' in data &&
    typeof data.continentCode === 'number'
  );
}

export function isCountries(data: unknown): data is Countries {
  return Array.isArray(data) && data.every(isCountry);
}

export function groupCountriesByContinent(
  countries: Countries,
): Record<string, Countries> {
  return countries.reduce<Record<string, Countries>>(
    (groupedCountries, country) => {
      return {
        ...groupedCountries,
        [country.continent]: [
          ...(groupedCountries[country.continent] ?? []),
          country,
        ],
      };
    },
    {},
  );
}
