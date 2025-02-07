import 'flag-icons/css/flag-icons.min.css';
import React from 'react';

type FlagProps = {
  isoCountryCode: string;
};

function Flag({ isoCountryCode }: FlagProps): React.JSX.Element {
  const flagClass = `fi fi-${isoCountryCode.toLowerCase()}`;

  return <span className={flagClass} title={isoCountryCode} />;
}

export default Flag;
