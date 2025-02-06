import { useNavigation } from '../routes/useNavigation';
import HomeLayout from '../ui/layouts/HomeLayout';

function HomeContainer(): React.JSX.Element {
  const { navigationLinks: menuLinks } = useNavigation();

  return <HomeLayout links={menuLinks} />;
}

export default HomeContainer;
