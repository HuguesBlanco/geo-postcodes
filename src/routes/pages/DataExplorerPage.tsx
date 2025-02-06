import React from 'react';
import DataExplorerContainer from '../../containers/DataExplorerContainer';
import MenuContainer from '../../containers/MenuContainer';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function DataExplorerPage(): React.JSX.Element {
  const { homePageLink, navigationLinks: menuLinks, urlPath } = useNavigation();

  return (
    <PageTemplate
      headerComponent={
        <MenuContainer
          homePageLink={homePageLink}
          navigationLinks={menuLinks}
          urlPath={urlPath}
        />
      }
    >
      <DataExplorerContainer />
    </PageTemplate>
  );
}

export default DataExplorerPage;
