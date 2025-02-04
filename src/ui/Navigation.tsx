import React from 'react';
import geoPostcodeLogo from '../assets/Geopostcodes-logo-header.svg';

type linkDatum = {
  key: string;
  label: string;
  navigationCallback: () => void;
};

type NavigationProps = {
  onLogoClick?: () => void;
  links: linkDatum[];
  activeLinkKey?: string;
  connectedMenu?: React.ReactNode;
};

function Navigation({
  links,
  activeLinkKey,
  connectedMenu,
  onLogoClick,
}: NavigationProps): React.ReactElement {
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button onClick={onLogoClick} className="focus:outline-none">
            <img
              src={geoPostcodeLogo}
              alt="GeoPostcodes Logo"
              className="h-8"
            />
          </button>

          <ul className="flex space-x-6">
            {links.map((link) => {
              const isActive = activeLinkKey === link.key;
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

        <div className="text-white">{connectedMenu}</div>
      </div>
    </nav>
  );
}

export default Navigation;
