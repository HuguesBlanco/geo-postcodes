import React from 'react';
import { Countries } from '../../types/countriesTypes';

type DataExplorerTemplateProps = {
  countries: Countries;
};

function DataExplorerTemplate({
  countries,
}: DataExplorerTemplateProps): React.JSX.Element {
  console.log(countries);
  return <div>DataExplorerTemplate</div>;
}

export default DataExplorerTemplate;
