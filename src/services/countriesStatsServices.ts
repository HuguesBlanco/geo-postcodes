import { FetchResult, ServiceReturn } from '../types/fetchTypes';
import { SummaryData } from '../types/statsTypes';

export function getCountriesStats(
  isoCountryList: string[],
): ServiceReturn<SummaryData> {
  // This function mock the fetching of statistic data about countries.

  const countryCount = isoCountryList.length;

  const mockedSummaryData: SummaryData = [
    { label: 'Countries', value: countryCount },
    { label: 'Administrative Regions', value: countryCount * 549 },
    { label: 'Streets', value: countryCount * 178_238 },
    { label: 'Businesses & admin', value: countryCount * 8_917 },
  ];

  const fakeResult = new Promise<FetchResult<SummaryData>>((resolve) => {
    setTimeout(() => {
      resolve({
        isSuccess: true,
        data: mockedSummaryData,
      });
    }, 500);
  });

  const abortFakely = (): void => {
    console.log('Countries statistic fetch aborted');
  };

  return { result: fakeResult, abort: abortFakely };
}
