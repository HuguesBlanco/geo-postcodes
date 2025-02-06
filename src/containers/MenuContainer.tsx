import React from 'react';
import { LinkDatum, LinksData } from '../types/linksTypes';
import Menu from '../ui/elements/Menu';

type MenuContainerProps = {
  logoLink: LinkDatum;
  menuLinks: LinksData;
  urlPath: string;
};

function MenuContainer({
  logoLink,
  menuLinks,
  urlPath,
}: MenuContainerProps): React.JSX.Element {
  // TODO: Fetch data from profile here

  return (
    <Menu
      logoLink={logoLink}
      navigationLinks={menuLinks}
      currentPath={urlPath}
      userMenu={<div>Profile</div>}
    />
  );
}

export default MenuContainer;
