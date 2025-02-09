import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

function DataDetailLayout(): React.JSX.Element {
  return (
    <div className="mt-40 text-blue-900 text-center px-6">
      <h1 className="text-4xl font-bold mb-6">Country Data Details</h1>
      <p className="text-lg mb-6">
        This page displays detailed information about a specific country.
      </p>
      <ul className="space-y-4 text-left max-w-2xl mx-auto">
        <li className="flex items-start">
          <IoMdArrowRoundForward className="text-blue-600 text-xl mr-2 mt-1" />
          <p className="leading-relaxed">
            The <code className="bg-gray-100 px-1 rounded">countryURL</code>{' '}
            parameter from the URL is retrieved by the page component and then
            passed as a prop to the container component.
          </p>
        </li>
        <li className="flex items-start">
          <IoMdArrowRoundForward className="text-blue-600 text-xl mr-2 mt-1" />
          <p className="leading-relaxed">
            The container component fetches the specific data for the country
            using this prop and passes it to the layout component.
          </p>
        </li>
        <li className="flex items-start">
          <IoMdArrowRoundForward className="text-blue-600 text-xl mr-2 mt-1" />
          <p className="leading-relaxed">
            The layout component then displays the retrieved data.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default DataDetailLayout;
