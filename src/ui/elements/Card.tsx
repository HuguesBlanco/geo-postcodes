import React from 'react';
import { LinkDatum } from '../../types/linksTypes';

type CardProps = {
  link: LinkDatum;
  backgroundImagePath: string;
};

function Card({ link, backgroundImagePath }: CardProps): React.JSX.Element {
  return (
    <div
      onClick={link.navigationCallback}
      className="cursor-pointer rounded-lg shadow-md p-6 hover:shadow-lg transition-all w-96 h-36 bg-blue-100 bg-no-repeat bg-contain bg-right-bottom"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      <p className="font-black text-blue-900">{link.label}</p>
    </div>
  );
}

export default Card;
