import React, { ReactNode } from 'react';

type PageTitleLayoutProps = {
  children: ReactNode | undefined;
  title: string | undefined;
};

const PageTitleLayout: React.FC<PageTitleLayoutProps> = ({
  children,
  title = 'Alexandr Demchenko CV',
}: PageTitleLayoutProps) => {
  document.title = title;

  return <>{children}</>;
};

export default PageTitleLayout;
