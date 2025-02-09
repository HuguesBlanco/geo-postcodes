import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Countries } from '../types/countriesTypes';
import { fetchCountries } from './countriesServices';

describe('fetchCountries', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return valid country data when the API call is successful', async () => {
    vi.stubGlobal(
      'fetch',
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCountries),
        }) as unknown as Promise<Response>,
    );

    const mockCountries: Countries = [
      {
        continent: 'North America',
        iso: 'CA',
        name: 'Canada',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Canada',
        continentCode: 10,
      },
      {
        continent: 'North America',
        iso: 'MX',
        name: 'Mexico',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Mexico',
        continentCode: 10,
      },
      {
        continent: 'North America',
        iso: 'US',
        name: 'United States',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'USA',
        continentCode: 10,
      },
      {
        continent: 'Western Europe',
        iso: 'FR',
        name: 'France',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'France',
        continentCode: 20,
      },
      {
        continent: 'Western Europe',
        iso: 'DE',
        name: 'Germany',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Germany',
        continentCode: 20,
      },
    ];

    const actualCountries = await fetchCountries();
    expect(actualCountries).toEqual(mockCountries);
  });

  it('should throw an error when the returned data is not in the expected format', async () => {
    vi.stubGlobal(
      'fetch',
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ invalid: 'data' }),
        }) as unknown as Promise<Response>,
    );

    await expect(fetchCountries()).rejects.toThrow(
      'Invalid data structure for countries',
    );
  });

  it('should throw an error when the API response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      () =>
        Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        }) as unknown as Promise<Response>,
    );

    await expect(fetchCountries()).rejects.toThrow(
      'Error 500: Internal Server Error',
    );
  });

  it('should throw an error when a network error occurs', async () => {
    vi.stubGlobal('fetch', () => Promise.reject(new Error('Network error')));

    await expect(fetchCountries()).rejects.toThrow('Network error');
  });
});
