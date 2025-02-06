import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import NavigationContainer from '../containers/NavigationContainer';
import Page from '../ui/elements/Page';

function Home(): React.JSX.Element {
  return (
    <Page navigationComponent={<NavigationContainer />}>
      <HomeContainer />
    </Page>
  );
}

export default Home;
