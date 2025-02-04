import { useNavigate } from 'react-router';
import HomeTemplate from '../ui/templates/HomeTemplate';

function HomeContainer(): React.JSX.Element {
  const navigate = useNavigate();

  // TODO: Mutualise with navigation links.
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

  return <HomeTemplate links={links} />;
}

export default HomeContainer;
