import { useLocation, useNavigate } from 'react-router';
import { LinkDatum, LinksData } from '../types/linksTypes';

export function useNavigation(): {
  homePageLink: LinkDatum;
  navigationLinks: LinksData;
  urlPath: string;
} {
  const navigate = useNavigate();

  const homePageLink = {
    key: '/',
    label: 'Home',
    navigationCallback: (): void => {
      void navigate('/');
    },
  };

  const navigationLinks = [
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

  const location = useLocation();
  const urlPath = location.pathname;

  return {
    homePageLink: homePageLink,
    navigationLinks: navigationLinks,
    urlPath,
  };
}
