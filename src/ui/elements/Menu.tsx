import React from 'react';
import geoPostcodeLogo from '../../assets/Geopostcodes-logo-header.svg';
import { LinkDatum, LinksData } from '../../types/linksTypes';

type MenuProps = {
  logoLink: LinkDatum;
  navigationLinks: LinksData;
  currentPath: string;
  userMenu?: React.ReactNode;
};

function Menu({
  logoLink,
  navigationLinks,
  currentPath,
  userMenu,
}: MenuProps): React.ReactElement {
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={logoLink.navigationCallback}
            className="focus:outline-none"
          >
            <img
              src={geoPostcodeLogo}
              alt="GeoPostcodes Logo"
              className="h-8"
            />
          </button>

          <ul className="flex space-x-6">
            {navigationLinks.map((link) => {
              const isActive = currentPath === link.key;
              return (
                <li key={link.key}>
                  <button
                    onClick={link.navigationCallback}
                    className={`text-white p-4 block transition-colors duration-200 focus:outline-none ${
                      isActive
                        ? 'border-b-4 border-blue-300'
                        : 'border-b-4 border-blue-900 hover:text-blue-200'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-white">{userMenu}</div>
      </div>
    </nav>
  );
}

export default Menu;
