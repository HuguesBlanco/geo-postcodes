import React from 'react';
import { LinkDatum } from '../../types/linksTypes';

type ErrorPageProps = {
  error: Error;
  redirectionLink: LinkDatum;
};

function ErrorPage({
  error,
  redirectionLink,
}: ErrorPageProps): React.JSX.Element {
  return (
    <div className="mt-40 text-blue-900 text-center">
      <h1 className="text-4xl font-bold mb-4">An error occurred</h1>
      <p className="text-lg text-blue-300 mb-6">{error.message}</p>
      <button
        onClick={redirectionLink.visit}
        className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
      >
        Go back to {redirectionLink.label}
      </button>
    </div>
  );
}

export default ErrorPage;
