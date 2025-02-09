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
  const cardStyleBasis =
    'cursor-pointer rounded-lg shadow-md p-6 hover:shadow-lg transition-all w-96 h-36 bg-blue-100 bg-no-repeat';
  const cardTextClasses = 'font-black text-blue-900';

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-center my-24 text-2xl font-black text-blue-900">
        Welcome to GeoPostcodes&apos; Customer Portal
      </h1>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {/* Data Explorer card */}
          <div
            onClick={links[0]?.visit}
            className={`${cardStyleBasis} bg-[25rem_auto] bg-[right_-5rem_bottom_-5rem]`}
            style={{ backgroundImage: `url(${dataExplorerImagePath})` }}
          >
            <p className={cardTextClasses}>{links[0]?.label}</p>
          </div>

          {/* Map Explorer card */}
          <div
            onClick={links[1]?.visit}
            className={`${cardStyleBasis} bg-[15rem_auto] bg-[right_0rem_bottom_0rem]`}
            style={{ backgroundImage: `url(${mapExplorerImagePath})` }}
          >
            <p className={cardTextClasses}>{links[1]?.label}</p>
          </div>

          {/* Download Center card */}
          <div
            onClick={links[2]?.visit}
            className={`${cardStyleBasis} bg-[6rem_auto] bg-[right_3rem_bottom_1.5rem]`}
            style={{ backgroundImage: `url(${downloadCenterImagePath})` }}
          >
            <p className={cardTextClasses}>{links[2]?.label}</p>
          </div>

          {/* Knowledge Base card */}
          <div
            onClick={links[3]?.visit}
            className={`${cardStyleBasis} bg-[7rem_auto] bg-[right_2rem_bottom_2rem]`}
            style={{ backgroundImage: `url(${knowledgeBaseImagePath})` }}
          >
            <p className={cardTextClasses}>{links[3]?.label}</p>
          </div>
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
