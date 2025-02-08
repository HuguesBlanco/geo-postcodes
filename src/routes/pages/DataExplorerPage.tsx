import React from 'react';
import DataExplorerContainer from '../../containers/DataExplorerContainer';
import UserAvatarContainer from '../../containers/UserAvatarContainer';
import Menu from '../../ui/elements/Menu';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function DataExplorerPage(): React.JSX.Element {
  const { homePageLink, navigationLinks, urlPath, visitPage } = useNavigation();

  return (
    <PageTemplate
      headerComponent={
        <Menu
          homePageLink={homePageLink}
          navigationLinks={navigationLinks}
          currentPath={urlPath}
          userMenu={<UserAvatarContainer />}
        />
      }
    >
      <DataExplorerContainer visitPage={visitPage} />
    </PageTemplate>
  );
}

export default DataExplorerPage;
