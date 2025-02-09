import React from 'react';
import { LinksData } from '../../types/linksTypes';

type MenuMobileProps = {
  navigationLinks: LinksData;
  userMenu?: React.ReactNode;
  isMenuOpen: boolean;
  closeMenu: () => void;
};

function MenuMobile({
  navigationLinks,
  userMenu,
  isMenuOpen,
  closeMenu,
}: MenuMobileProps): React.ReactElement {
  return (
    <>
      {/* Semi-Transparent Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-blue-900/50 backdrop-blur-xs z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar Menu (75% width) */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-blue-900 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* User Menu */}
        <div className="bg-blue-950 pt-12 pb-8 px-8">{userMenu}</div>

        {/* Menu Items */}
        <ul className="text-white">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => {
                  link.visit();
                  closeMenu();
                }}
                className="block w-full text-left text-lg py-8 px-8 hover:bg-blue-700"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MenuMobile;
