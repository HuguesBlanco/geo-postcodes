import React from 'react';
import MenuContainer from '../../containers/MenuContainer';
import NotFoundLayout from '../../ui/layouts/NotFoundLayout';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

function NotFoundPage(): React.JSX.Element {
  const { homePageLink, navigationLinks, urlPath } = useNavigation();

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
      <NotFoundLayout homePageLink={homePageLink} />
    </PageTemplate>
  );
}

export default NotFoundPage;
