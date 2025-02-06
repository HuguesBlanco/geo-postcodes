import { Countries } from '../types/countriesTypes';
import { FetchResult } from '../types/fetchTypes';
import { isCountries } from '../utils/countriesUtils';
import {
  normalizeFetchError,
  parseFetchResponse,
  validateData,
} from '../utils/fetchUtils';

export function getCountries(): {
  countriesResult: Promise<FetchResult<Countries>>;
  abort: () => void;
} {
  const controller = new AbortController();

  const countriesResult = fetch(
    'https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json',
    { signal: controller.signal },
  )
    .then(parseFetchResponse)
    .then((result) =>
      result.isSuccess ? validateData(result.data, isCountries) : result,
    )
    .catch(normalizeFetchError);

  return {
    countriesResult,
    abort: (): void => {
      controller.abort();
    },
  };
}
