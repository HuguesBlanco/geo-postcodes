import React from 'react';
import { Link } from 'react-router';

function Home(): React.JSX.Element {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/data-explorer">Go to Data Explorer</Link>
    </div>
  );
}

export default Home;
