import { describe, expect, it } from 'vitest';
import { Countries, Country } from '../types/countriesTypes';
import {
  groupCountriesByContinent,
  isCountries,
  isCountry,
} from './countriesUtils';

describe('isCountry', () => {
  it('should return true for a valid Country object', () => {
    const validCountry: Country = {
      continent: 'Europe',
      iso: 'DE',
      name: 'Germany',
      noPostalCode: false,
      limited: false,
      notAvailable: false,
      url: 'https://example.com/germany',
      continentCode: 1,
    };

    expect(isCountry(validCountry)).toBe(true);
  });

  it('should return false for an object missing required properties', () => {
    const invalidCountry = {
      continent: 'Europe',
      iso: 'DE',
      name: 'Germany',
      noPostalCode: false,
      limited: false,
      // missing notAvailable, url, continentCode
    };

    expect(isCountry(invalidCountry)).toBe(false);
  });

  it('should return false for an object with incorrect property types', () => {
    const invalidCountry = {
      continent: 'Europe',
      iso: 'DE',
      name: 'Germany',
      noPostalCode: 'false', // should be boolean
      limited: false,
      notAvailable: false,
      url: 'https://example.com/germany',
      continentCode: '1', // should be number
    };

    expect(isCountry(invalidCountry)).toBe(false);
  });

  it('should return false for a non-object input', () => {
    expect(isCountry(null)).toBe(false);
    expect(isCountry(undefined)).toBe(false);
    expect(isCountry(42)).toBe(false);
    expect(isCountry('Germany')).toBe(false);
    expect(isCountry(true)).toBe(false);
  });
});

describe('isCountries', () => {
  it('should return true for an array of valid Country objects', () => {
    const validCountries: Countries = [
      {
        continent: 'Europe',
        iso: 'DE',
        name: 'Germany',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'https://example.com/germany',
        continentCode: 1,
      },
      {
        continent: 'Asia',
        iso: 'JP',
        name: 'Japan',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'https://example.com/japan',
        continentCode: 2,
      },
    ];

    expect(isCountries(validCountries)).toBe(true);
  });

  it('should return false if any object in the array is invalid', () => {
    const invalidCountries = [
      {
        continent: 'Europe',
        iso: 'DE',
        name: 'Germany',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'https://example.com/germany',
        continentCode: 1,
      },
      {
        continent: 'Asia',
        iso: 'JP',
        name: 'Japan',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'https://example.com/japan',
        // missing continentCode
      },
    ];

    expect(isCountries(invalidCountries)).toBe(false);
  });

  it('should return false for a non-array input', () => {
    expect(isCountries(null)).toBe(false);
    expect(isCountries(undefined)).toBe(false);
    expect(isCountries(42)).toBe(false);
    expect(isCountries('Germany')).toBe(false);
    expect(isCountries(true)).toBe(false);
    expect(isCountries({})).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isCountries([])).toBe(true);
  });
});

describe('groupCountriesByContinent', () => {
  it('should group countries by their continent', () => {
    const initialCountries: Countries = [
      {
        name: 'Canada',
        iso: 'CA',
        continent: 'North America',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Canada',
        continentCode: 10,
      },
      {
        name: 'Mexico',
        iso: 'MX',
        continent: 'North America',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Mexico',
        continentCode: 10,
      },
      {
        name: 'United States',
        iso: 'US',
        continent: 'North America',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'USA',
        continentCode: 10,
      },
      {
        name: 'France',
        iso: 'FR',
        continent: 'Western Europe',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'France',
        continentCode: 20,
      },
      {
        name: 'Germany',
        iso: 'DE',
        continent: 'Western Europe',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Germany',
        continentCode: 20,
      },
    ];

    const expectedGroupedCountries = {
      'North America': [
        {
          name: 'Canada',
          iso: 'CA',
          continent: 'North America',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'Canada',
          continentCode: 10,
        },
        {
          name: 'Mexico',
          iso: 'MX',
          continent: 'North America',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'Mexico',
          continentCode: 10,
        },
        {
          name: 'United States',
          iso: 'US',
          continent: 'North America',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'USA',
          continentCode: 10,
        },
      ],
      'Western Europe': [
        {
          name: 'France',
          iso: 'FR',
          continent: 'Western Europe',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'France',
          continentCode: 20,
        },
        {
          name: 'Germany',
          iso: 'DE',
          continent: 'Western Europe',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'Germany',
          continentCode: 20,
        },
      ],
    };

    const actualGroupedCountries = groupCountriesByContinent(initialCountries);
    expect(actualGroupedCountries).toEqual(expectedGroupedCountries);
  });

  it('should return an empty object when given an empty array', () => {
    const initialCountries: Countries = [];
    const expectedGroupedCountries = {};
    const actualGroupedCountries = groupCountriesByContinent(initialCountries);
    expect(actualGroupedCountries).toEqual(expectedGroupedCountries);
  });

  it('should handle a single country correctly', () => {
    const initialCountries: Countries = [
      {
        name: 'Ireland',
        iso: 'IE',
        continent: 'Western Europe',
        noPostalCode: false,
        limited: false,
        notAvailable: false,
        url: 'Ireland',
        continentCode: 20,
      },
    ];
    const expectedGroupedCountries = {
      'Western Europe': [
        {
          name: 'Ireland',
          iso: 'IE',
          continent: 'Western Europe',
          noPostalCode: false,
          limited: false,
          notAvailable: false,
          url: 'Ireland',
          continentCode: 20,
        },
      ],
    };
    const actualGroupedCountries = groupCountriesByContinent(initialCountries);
    expect(actualGroupedCountries).toEqual(expectedGroupedCountries);
  });
});
