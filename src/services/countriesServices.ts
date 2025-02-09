import { Countries } from '../types/countriesTypes';
import { isCountries } from '../utils/countriesUtils';

export async function fetchCountries(): Promise<Countries> {
  const response = await fetch(
    'https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json',
  );

  if (!response.ok) {
    const errorStatrus = String(response.status);
    const errorMessage = response.statusText;
    throw new Error(`Error ${errorStatrus}: ${errorMessage}`);
  }

  const data: unknown = await response.json();

  if (!isCountries(data)) {
    throw new Error('Invalid data structure for countries');
  }

  return data;
}
