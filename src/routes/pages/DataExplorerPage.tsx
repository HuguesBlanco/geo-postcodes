import React from 'react';
import DataExplorerContainer from '../../containers/DataExplorerContainer';
import MenuContainer from '../../containers/MenuContainer';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function DataExplorerPage(): React.JSX.Element {
  const { homePageLink, navigationLinks, urlPath, visitPage } = useNavigation();

  return (
    <PageTemplate
      headerComponent={
        <MenuContainer
          homePageLink={homePageLink}
          navigationLinks={navigationLinks}
          urlPath={urlPath}
        />
      }
    >
      <DataExplorerContainer visitPage={visitPage} />
    </PageTemplate>
  );
}

export default DataExplorerPage;
