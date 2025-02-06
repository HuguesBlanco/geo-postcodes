import React from 'react';
import { LinkDatum, LinksData } from '../types/linksTypes';
import Menu from '../ui/elements/Menu';

type MenuContainerProps = {
  homePageLink: LinkDatum;
  navigationLinks: LinksData;
  urlPath: string;
};

function MenuContainer({
  homePageLink,
  navigationLinks,
  urlPath,
}: MenuContainerProps): React.JSX.Element {
  // TODO: Fetch data from profile here

  return (
    <Menu
      homePageLink={homePageLink}
      navigationLinks={navigationLinks}
      currentPath={urlPath}
      userMenu={<div>Profile</div>}
    />
  );
}

export default MenuContainer;
