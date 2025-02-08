import React from 'react';
import UserAvatarContainer from '../../containers/UserAvatarContainer';
import Menu from '../../ui/elements/Menu';
import HomeLayout from '../../ui/layouts/HomeLayout';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function HomePage(): React.JSX.Element {
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
      <HomeLayout links={navigationLinks} />
    </PageTemplate>
  );
}

export default HomePage;
