import React from 'react';
import { useParams } from 'react-router';

type PageParameters = {
  id: string;
};

function DataDetail(): React.JSX.Element {
  const { id } = useParams<PageParameters>();

  if (id === undefined) {
    return <div>Wrong id parameter in URL</div>;
  }

  return (
    <div>
      <h1>Data Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default DataDetail;
