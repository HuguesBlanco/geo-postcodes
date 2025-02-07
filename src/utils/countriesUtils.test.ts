import { describe, expect, it } from 'vitest';
import { Countries, Country } from '../types/countriesTypes';
import {
  getMatchingCountries,
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

describe('getMatchingCountries', () => {
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
      continent: 'Asia',
      iso: 'JP',
      name: 'Japan',
      noPostalCode: false,
      limited: false,
      notAvailable: false,
      url: 'Japan',
      continentCode: 40,
    },
  ];

  it('should return all countries when search text is empty', () => {
    const actualCountries = getMatchingCountries(mockCountries, '');
    expect(actualCountries).toEqual(mockCountries);
  });

  it('should return matching country when searching by name', () => {
    const expectedCountries = [mockCountries[2]];
    const actualCountries = getMatchingCountries(mockCountries, 'France');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return matching country when searching by ISO code', () => {
    const expectedCountries = [mockCountries[3]];
    const actualCountries = getMatchingCountries(mockCountries, 'JP');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return matching country when searching by continent', () => {
    const expectedCountries = [mockCountries[0], mockCountries[1]];
    const actualCountries = getMatchingCountries(
      mockCountries,
      'North America',
    );
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return matching country when searching by part of a property (case insensitive)', () => {
    const expectedCountries = [mockCountries[0]];
    const actualCountries = getMatchingCountries(mockCountries, 'can');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return matching country when searching by URL', () => {
    const expectedCountries = [mockCountries[3]];
    const actualCountries = getMatchingCountries(mockCountries, 'Japan');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return matching country when searching by continent code', () => {
    const expectedCountries = [mockCountries[0], mockCountries[1]];
    const actualCountries = getMatchingCountries(mockCountries, '10');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should return an empty array when no matches are found', () => {
    const expectedCountries: Countries = [];
    const actualCountries = getMatchingCountries(mockCountries, 'xyz');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should not consider boolean values', () => {
    const expectedCountries: Countries = [];
    const actualCountries = getMatchingCountries(mockCountries, 'true');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should handle leading and trailing spaces in search text', () => {
    // TO CORRECT
    const expectedCountries = [mockCountries[2]];
    const actualCountries = getMatchingCountries(mockCountries, '  france  ');
    expect(actualCountries).toEqual(expectedCountries);
  });

  it('should handle numeric values search', () => {
    const expectedCountries = [mockCountries[2]];
    const actualCountries = getMatchingCountries(mockCountries, '20');
    expect(actualCountries).toEqual(expectedCountries);
  });
});
