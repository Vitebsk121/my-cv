import React, { ReactNode } from 'react';

type PageTitleLayoutProps = {
  children: ReactNode | undefined;
  title: string;
};

const PageTitleLayout: React.FC<PageTitleLayoutProps> = ({ children, title }: PageTitleLayoutProps) => {
  document.title = `Alexandr CV | ${title}`;

  return <>{children}</>;
};

export default PageTitleLayout;
