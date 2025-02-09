import React from 'react';
import { useParams } from 'react-router';
import UserAvatarContainer from '../../containers/UserAvatarContainer';
import Menu from '../../ui/elements/Menu';
import DataDetailLayout from '../../ui/layouts/DataDetailLayout';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

type PageParameters = {
  id: string;
};

function DataDetailPage(): React.JSX.Element {
  const { homePageLink, navigationLinks, urlPath } = useNavigation();
  const { id } = useParams<PageParameters>();

  if (id === undefined) {
    return <div>Wrong id parameter in URL</div>;
  }

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
      <DataDetailLayout />
    </PageTemplate>
  );
}

export default DataDetailPage;
