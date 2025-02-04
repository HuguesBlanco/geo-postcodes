import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Countries } from '../types/countriesTypes';
import { Result } from '../types/fetchTypes';
import { getCountries } from './countriesServices';

const mockCountries: Countries = [
  {
    continent: 'Europe',
    iso: 'FR',
    name: 'France',
    noPostalCode: false,
    limited: false,
    notAvailable: false,
    url: 'https://example.com/france',
    continentCode: 1,
  },
];

describe('getCountries', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should resolve with success when fetching and validating countries succeeds', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve(
          new Response(JSON.stringify(mockCountries), { status: 200 }),
        ),
      ),
    );

    const { countriesResult } = getCountries();
    const actualResult = await countriesResult;
    const expectedResult: Result<Countries> = {
      isSuccess: true,
      data: mockCountries,
    };

    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve with failure when fetch fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.reject(new Error('Network failure'))),
    );

    const { countriesResult } = getCountries();
    const actualResult = await countriesResult;
    const expectedResult: Result<Countries> = {
      isSuccess: false,
      error: new Error('Network failure'),
    };

    expect(actualResult).toEqual(expectedResult);
  });

  it('should abort the request when abort is called', () => {
    const abortSpy = vi.spyOn(AbortController.prototype, 'abort');
    vi.stubGlobal(
      'fetch',
      vi.fn(
        () =>
          new Promise(() => {
            return undefined; // Never resolves
          }),
      ),
    );

    const { abort } = getCountries();
    abort(); // Will trigger abort prototype

    expect(abortSpy).toHaveBeenCalled();
  });
});
