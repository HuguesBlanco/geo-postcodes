import React from 'react';
import HomeContainer from '../../containers/HomeContainer';
import MenuContainer from '../../containers/MenuContainer';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function HomePage(): React.JSX.Element {
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
      <HomeContainer />
    </PageTemplate>
  );
}

export default HomePage;
