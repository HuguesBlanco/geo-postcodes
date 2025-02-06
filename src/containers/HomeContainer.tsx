import { useNavigation } from '../routes/useNavigation';
import HomeLayout from '../ui/layouts/HomeLayout';

function HomeContainer(): React.JSX.Element {
  const { navigationLinks } = useNavigation();

  return <HomeLayout links={navigationLinks} />;
}

export default HomeContainer;
