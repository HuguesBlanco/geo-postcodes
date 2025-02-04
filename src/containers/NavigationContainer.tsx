import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Navigation from '../ui/Navigation';

function NavigationContainer(): React.JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      key: '/data-explorer',
      label: 'Data Explorer',
      navigationCallback: (): void => {
        void navigate('/data-explorer');
      },
    },
    {
      key: '/map-explorer',
      label: 'Map Explorer',
      navigationCallback: (): void => {
        void navigate('/map-explorer');
      },
    },
    {
      key: '/download-center',
      label: 'Download Center',
      navigationCallback: (): void => {
        void navigate('/download-center');
      },
    },
    {
      key: '/knowledge-base',
      label: 'Knowledge Base',
      navigationCallback: (): void => {
        void navigate('/knowledge-base');
      },
    },
  ];

  const handleLogoClick = (): void => {
    void navigate('/');
  };

  return (
    <Navigation
      onLogoClick={handleLogoClick}
      links={links}
      activeLinkKey={location.pathname}
      connectedMenu={<div>Profile</div>}
    />
  );
}

export default NavigationContainer;
