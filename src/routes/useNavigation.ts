import { useLocation, useNavigate } from 'react-router';
import { LinkBasis, LinkDatum, LinksData } from '../types/linksTypes';

export function useNavigation(): {
  homePageLink: LinkDatum;
  navigationLinks: LinksData;
  urlPath: string;
  visitPage: (urlPath: string) => void;
} {
  const HOME_PAGE_LINK_INFO: LinkBasis = { path: '/', label: 'Home' } as const;

  const NAVIGATION_LINK_INFO: LinkBasis[] = [
    {
      path: '/data-explorer',
      label: 'Data Explorer',
    },
    {
      path: '/map-explorer',
      label: 'Map Explorer',
    },
    {
      path: '/download-center',
      label: 'Download Center',
    },
    {
      path: '/knowledge-base',
      label: 'Knowledge Base',
    },
  ] as const;

  const navigate = useNavigate();

  const visitPage = (urlPath: string): void => {
    void navigate(urlPath);
  };

  const createLinkDatum = (linkInfo: LinkBasis): LinkDatum => {
    const linkSpecificCallback = (): void => {
      visitPage(linkInfo.path);
    };

    return {
      ...linkInfo,
      visit: linkSpecificCallback,
    };
  };

  const homePageLink = createLinkDatum(HOME_PAGE_LINK_INFO);

  const navigationLinks = NAVIGATION_LINK_INFO.map(createLinkDatum);

  const location = useLocation();
  const urlPath = location.pathname;

  return {
    homePageLink,
    navigationLinks,
    urlPath,
    visitPage,
  };
}
