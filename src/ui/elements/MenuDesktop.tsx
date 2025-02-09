import React from 'react';
import { LinksData } from '../../types/linksTypes';

type DesktopMenuProps = {
  navigationLinks: LinksData;
  currentPath: string;
};

function DesktopMenu({
  navigationLinks,
  currentPath,
}: DesktopMenuProps): React.ReactElement {
  return (
    <ul className="flex space-x-6">
      {navigationLinks.map((link) => {
        const isActive = currentPath === link.path;
        return (
          <li key={link.path}>
            <button
              onClick={() => {
                link.visit();
              }}
              className={`text-white p-5 block transition-colors duration-200 ${
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
  );
}

export default DesktopMenu;
