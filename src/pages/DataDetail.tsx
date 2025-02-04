import React from 'react';
import { useParams } from 'react-router';
import NavigationContainer from '../containers/NavigationContainer';
import Page from '../ui/Page';

type PageParameters = {
  id: string;
};

function DataDetail(): React.JSX.Element {
  const { id } = useParams<PageParameters>();

  if (id === undefined) {
    return <div>Wrong id parameter in URL</div>;
  }

  return (
    <Page navigationComponent={<NavigationContainer />}>
      <div>Detail</div>
    </Page>
  );
}

export default DataDetail;
