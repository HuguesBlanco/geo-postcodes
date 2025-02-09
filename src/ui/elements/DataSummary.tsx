import React from 'react';
import { SummaryData } from '../../types/statsTypes';
import { formatNumberForDispay, isEven } from '../../utils/mathUtils';
import Loader from './Loader';

type DataListProps = {
  data: SummaryData;
};

function DataList({ data }: DataListProps): React.JSX.Element {
  return (
    <ul>
      {data.map((datum, index) => {
        const backgroundColor = isEven(index) ? '' : 'bg-gray-100';
        const displayedValue = formatNumberForDispay(datum.value);

        return (
          <li
            key={datum.label}
            className={`flex justify-between p-2 ${backgroundColor}`}
          >
            <span className="text-gray-700">{datum.label}:</span>
            <span>{displayedValue}</span>
          </li>
        );
      })}
    </ul>
  );
}

function DataLoader(): React.JSX.Element {
  return (
    <div className="h-44 flex items-center justify-center">
      <Loader />
    </div>
  );
}

type DataSummaryProps = {
  isDataFetching: boolean;
  data: SummaryData;
};

function DataSummary({
  isDataFetching,
  data,
}: DataSummaryProps): React.JSX.Element {
  return (
    <div>
      <h3 className="border-b border-gray-200 pb-2">
        <span className="font-black">Dataset</span> content
      </h3>
      <div className="min-h-44">
        {isDataFetching ? <DataLoader /> : <DataList data={data} />}
      </div>
    </div>
  );
}

export default DataSummary;
