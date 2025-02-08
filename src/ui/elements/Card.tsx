import React from 'react';
import { LinkDatum } from '../../types/linksTypes';

export type CardBackgroundInfo = {
  imagePath: string;
  tailwindClasses: string;
};

type CardProps = {
  link: LinkDatum;
  backgroundInfo: CardBackgroundInfo | null;
};

function Card({ link, backgroundInfo }: CardProps): React.JSX.Element {
  return (
    <div
      onClick={link.visit}
      className={`cursor-pointer rounded-lg shadow-md p-6 hover:shadow-lg transition-all w-96 h-36 bg-blue-100 bg-no-repeat ${
        backgroundInfo?.tailwindClasses ?? ''
      }`}
      style={
        backgroundInfo
          ? { backgroundImage: `url(${backgroundInfo.imagePath})` }
          : {}
      }
    >
      <p className="font-black text-blue-900">{link.label}</p>
    </div>
  );
}

export default Card;
