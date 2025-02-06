import React from 'react';
import DataExplorerContainer from '../containers/DataExplorerContainer';
import NavigationContainer from '../containers/NavigationContainer';
import Page from '../ui/elements/Page';

function DataExplorer(): React.JSX.Element {
  return (
    <Page navigationComponent={<NavigationContainer />}>
      <DataExplorerContainer />
    </Page>
  );
}

export default DataExplorer;
