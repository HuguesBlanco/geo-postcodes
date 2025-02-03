import React from 'react';
import { Link } from 'react-router';

function DataExplorer(): React.JSX.Element {
  const dataIds = ['1', '2', '3'];

  return (
    <div>
      <h1>Data Explorer</h1>
      <ul>
        {dataIds.map((id) => (
          <li key={id}>
            <Link to={`/data-explorer/${id}`}>Data {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataExplorer;
