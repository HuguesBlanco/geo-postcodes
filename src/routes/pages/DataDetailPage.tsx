import React from 'react';
import { useParams } from 'react-router';
import MenuContainer from '../../containers/MenuContainer';
import PageTemplate from '../../ui/templates/PageTemplate';
import { useNavigation } from '../useNavigation';

type PageParameters = {
  id: string;
};

function DataDetailPage(): React.JSX.Element {
  const { logoLink, navigationLinks: menuLinks, urlPath } = useNavigation();
  const { id } = useParams<PageParameters>();

  if (id === undefined) {
    return <div>Wrong id parameter in URL</div>;
  }

  return (
    <PageTemplate
      navigationComponent={
        <MenuContainer
          logoLink={logoLink}
          menuLinks={menuLinks}
          urlPath={urlPath}
        />
      }
    >
      <div>Detail</div>
    </PageTemplate>
  );
}

export default DataDetailPage;
