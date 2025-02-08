import React from 'react';
import UserAvatarContainer from '../../containers/UserAvatarContainer';
import Menu from '../../ui/elements/Menu';
import NotFoundLayout from '../../ui/layouts/NotFoundLayout';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function NotFoundPage(): React.JSX.Element {
  const { homePageLink, navigationLinks, urlPath } = useNavigation();

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
      <NotFoundLayout homePageLink={homePageLink} />
    </PageTemplate>
  );
}

export default NotFoundPage;
