import React from 'react';
import { SummaryData } from '../../types/statsTypes';
import { formatNumberForDispay, isEven } from '../../utils/mathUtils';

type DataSummaryProps = {
  data: SummaryData;
};

function DataSummary({ data }: DataSummaryProps): React.JSX.Element {
  return (
    <div>
      <h2 className="border-b-2 pb-2">
        <span className="font-black">Dataset</span> content
      </h2>
      <ul>
        {data.map((datum, index) => {
          const backgroundColor = isEven(index) ? '' : 'bg-gray-100';

          const displayedValue = formatNumberForDispay(datum.value);

          return (
            <li
              key={datum.label}
              className={`flex justify-between p-2 ${backgroundColor}`}
            >
              <span className="text-gray-700">{datum.label}:</span>{' '}
              <span>{displayedValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataSummary;
