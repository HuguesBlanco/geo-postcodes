import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

function Loader(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <BiLoaderAlt className="animate-spin text-blue-900" size={40} />
    </div>
  );
}

export default Loader;
