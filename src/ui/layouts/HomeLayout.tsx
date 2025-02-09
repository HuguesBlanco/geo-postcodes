import React from 'react';
import dataExplorerImagePath from '../../assets/data_explorer.svg';
import downloadCenterImagePath from '../../assets/dowload_center.svg';
import knowledgeBaseImagePath from '../../assets/kb.svg';
import backgroundImagePath from '../../assets/main_background.webp';
import mapExplorerImagePath from '../../assets/map_explorer.webp';
import { LinksData } from '../../types/linksTypes';

type HomeLayoutProps = {
  links: LinksData;
};

function HomeLayout({ links }: HomeLayoutProps): React.JSX.Element {
  const cards = [
    {
      link: links[0]?.visit,
      label: links[0]?.label,
      image: dataExplorerImagePath,
      backgroundSize: 'bg-[25rem_auto]',
      backgroundPosition: 'bg-[right_-5rem_bottom_-5rem]',
    },
    {
      link: links[1]?.visit,
      label: links[1]?.label,
      image: mapExplorerImagePath,
      backgroundSize: 'bg-[15rem_auto]',
      backgroundPosition: 'bg-[right_0rem_bottom_0rem]',
    },
    {
      link: links[2]?.visit,
      label: links[2]?.label,
      image: downloadCenterImagePath,
      backgroundSize: 'bg-[6rem_auto]',
      backgroundPosition: 'bg-[right_3rem_bottom_1.5rem]',
    },
    {
      link: links[3]?.visit,
      label: links[3]?.label,
      image: knowledgeBaseImagePath,
      backgroundSize: 'bg-[7rem_auto]',
      backgroundPosition: 'bg-[right_2rem_bottom_2rem]',
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-center my-24 text-2xl font-black text-blue-900">
        Welcome to GeoPostcodes&apos; Customer Portal
      </h1>

      <div className="px-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={card.link}
              className={`cursor-pointer rounded-lg shadow-md p-6 hover:shadow-lg transition-all w-full h-36 bg-blue-100 bg-no-repeat ${card.backgroundSize} ${card.backgroundPosition}`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <p className="font-black text-blue-900">{card.label}</p>
            </div>
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
