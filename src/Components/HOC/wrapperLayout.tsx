import React, { ReactNode } from 'react';

type WrapperLayoutProps = {
  children: ReactNode | undefined;
};

const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
}: WrapperLayoutProps) => (
  <>
    <header />
    <main>{children}</main>
    <footer />
  </>
);

export default WrapperLayout;
