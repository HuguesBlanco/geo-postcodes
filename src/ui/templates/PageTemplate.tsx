import React from 'react';

type PageTemplateProps = {
  navigationComponent: React.JSX.Element;
  children: React.JSX.Element;
};

function PageTemplate({
  navigationComponent,
  children,
}: PageTemplateProps): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div>{navigationComponent}</div>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}

export default PageTemplate;
