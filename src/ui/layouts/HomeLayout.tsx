import React from 'react';
import dataExplorerImagePath from '../../assets/data_explorer.svg';
import downloadCenterImagePath from '../../assets/dowload_center.svg';
import knowledgeBaseImagePath from '../../assets/kb.svg';
import backgroundImagePath from '../../assets/main_background.webp';
import mapExplorerImagePath from '../../assets/map_explorer.webp';
import { LinksData } from '../../types/linksTypes';
import Card from '../elements/Card';

type HomeLayoutProps = {
  links: LinksData;
};

function HomeLayout({ links }: HomeLayoutProps): React.JSX.Element {
  const cardBackgroundPaths = [
    dataExplorerImagePath,
    mapExplorerImagePath,
    downloadCenterImagePath,
    knowledgeBaseImagePath,
  ];
  return (
    <div className="flex-1 bg-cover bg-center bg-no-repeat flex flex-col">
      <div>
        <h1 className="text-center my-24 text-2xl font-black text-blue-900">
          Welcome to GeoPostcodes&apos; Customer Portal
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {links.map((link, index) => (
            <Card
              key={link.key}
              link={link}
              backgroundImagePath={
                cardBackgroundPaths[index] ?? dataExplorerImagePath
              }
            />
          ))}
        </div>
      </div>

      <div
        className="flex-1 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImagePath})` }}
      ></div>
    </div>
  );
}

export default HomeLayout;
