import React from 'react';
import { LinkDatum } from '../types/linksTypes';
import NotFoundLayout from '../ui/layouts/NotFoundLayout';

type NotFoundContainerProps = {
  homePageLink: LinkDatum;
};

function NotFoundContainer({
  homePageLink,
}: NotFoundContainerProps): React.JSX.Element {
  return <NotFoundLayout homePageLink={homePageLink} />;
}

export default NotFoundContainer;
