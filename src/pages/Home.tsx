import React from 'react';
import NavigationContainer from '../containers/NavigationContainer';
import Page from '../ui/Page';

function Home(): React.JSX.Element {
  return (
    <Page navigationComponent={<NavigationContainer />}>
      <div>Home</div>
    </Page>
  );
}

export default Home;
