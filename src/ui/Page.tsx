import React from 'react';

type PageProps = {
  navigationComponent: React.JSX.Element;
  children: React.JSX.Element;
};

function Page({ navigationComponent, children }: PageProps): React.JSX.Element {
  return (
    <div>
      <div>{navigationComponent}</div>
      <div>{children}</div>
    </div>
  );
}

export default Page;
