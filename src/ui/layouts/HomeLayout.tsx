import React from 'react';
import dataExplorerImagePath from '../../assets/data_explorer.svg';
import downloadCenterImagePath from '../../assets/dowload_center.svg';
import knowledgeBaseImagePath from '../../assets/kb.svg';
import backgroundImagePath from '../../assets/main_background.webp';
import mapExplorerImagePath from '../../assets/map_explorer.webp';
import { LinksData } from '../../types/linksTypes';
import Card, { CardBackgroundInfo } from '../elements/Card';

type HomeLayoutProps = {
  links: LinksData;
};

function HomeLayout({ links }: HomeLayoutProps): React.JSX.Element {
  const cardBackgrounds: CardBackgroundInfo[] = [
    {
      imagePath: dataExplorerImagePath,
      tailwindClasses: 'bg-[25rem_auto] bg-[right_-5rem_bottom_-5rem]',
    },
    {
      imagePath: mapExplorerImagePath,
      tailwindClasses: 'bg-[15rem_auto] bg-[right_0rem_bottom_0rem]',
    },
    {
      imagePath: downloadCenterImagePath,
      tailwindClasses: 'bg-[6rem_auto] bg-[right_3rem_bottom_1.5rem]',
    },
    {
      imagePath: knowledgeBaseImagePath,
      tailwindClasses: 'bg-[7rem_auto] bg-[right_2rem_bottom_2rem]',
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-cover bg-center bg-no-repeat">
      <h1 className="text-center my-24 text-2xl font-black text-blue-900">
        Welcome to GeoPostcodes&apos; Customer Portal
      </h1>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {links.map((link, index) => (
            <Card
              key={link.path}
              link={link}
              backgroundInfo={cardBackgrounds[index] ?? null}
            />
          ))}
        </div>
      </div>

      <div
        className="flex-1 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImagePath})` }}
      />
    </div>
  );
}

export default HomeLayout;
