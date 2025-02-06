import React from 'react';

type PageTemplateProps = {
  headerComponent: React.JSX.Element;
  children: React.JSX.Element;
};

function PageTemplate({
  headerComponent,
  children,
}: PageTemplateProps): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div>{headerComponent}</div>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}

export default PageTemplate;
