import React from 'react';
import { LinkDatum, LinksData } from '../types/linksTypes';
import Menu from '../ui/elements/Menu';
import UserAvatarContainer from './UserAvatarContainer';

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
  return (
    <Menu
      homePageLink={homePageLink}
      navigationLinks={navigationLinks}
      currentPath={urlPath}
      userMenu={<UserAvatarContainer />}
    />
  );
}

export default MenuContainer;
