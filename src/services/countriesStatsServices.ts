import { SummaryData } from '../types/statsTypes';

export async function fetchCountriesStatistics(
  isoCountryList: string[],
): Promise<SummaryData> {
  const numberOfCountries: number = isoCountryList.length;

  const fakeSummaryData: SummaryData = [
    { label: 'Countries', value: numberOfCountries },
    { label: 'Administrative Regions', value: numberOfCountries * 549 },
    { label: 'Streets', value: numberOfCountries * 178238 },
    { label: 'Businesses & admin', value: numberOfCountries * 8917 },
  ];

  // Simulate network delay.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return fakeSummaryData;
}
