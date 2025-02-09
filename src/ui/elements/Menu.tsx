import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import geoPostcodeLogo from '../../assets/Geopostcodes-logo-header.svg';
import { LinkDatum, LinksData } from '../../types/linksTypes';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

type MenuProps = {
  homePageLink: LinkDatum;
  navigationLinks: LinksData;
  currentPath: string;
  userMenu?: React.ReactNode;
};

function Menu({
  homePageLink,
  navigationLinks,
  currentPath,
  userMenu,
}: MenuProps): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            homePageLink.visit();
          }}
          className="p-4"
        >
          <img src={geoPostcodeLogo} alt="GeoPostcodes Logo" className="h-8" />
        </button>

        {/* Toggle Button (Hamburger or Close Icon) */}
        <button
          className="xl:hidden text-white p-5 relative z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:block">
          <MenuDesktop
            navigationLinks={navigationLinks}
            currentPath={currentPath}
          />
        </div>

        {/* User Menu for Desktop */}
        <div className="hidden xl:block text-white px-5">{userMenu}</div>
      </div>

      {/* Mobile Navigation (Overlay & Sidebar) */}
      <MenuMobile
        navigationLinks={navigationLinks}
        userMenu={userMenu}
        isMenuOpen={isMenuOpen}
        closeMenu={() => {
          setIsMenuOpen(false);
        }}
      />
    </nav>
  );
}

export default Menu;
