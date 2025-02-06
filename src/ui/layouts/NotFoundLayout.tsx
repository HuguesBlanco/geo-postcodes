import React from 'react';
import { LinkDatum } from '../../types/linksTypes';

type NotFoundLayoutProps = {
  homePageLink: LinkDatum;
};

function NotFoundLayout({
  homePageLink,
}: NotFoundLayoutProps): React.JSX.Element {
  return (
    <div className="mt-40 text-blue-900 text-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-lg text-blue-300 mb-6">
        The page doesn&apos;t exist or hasn&apos;t been implemented yet.
      </p>
      <button
        onClick={homePageLink.navigationCallback}
        className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
      >
        Go back to Home Page
      </button>
    </div>
  );
}

export default NotFoundLayout;
