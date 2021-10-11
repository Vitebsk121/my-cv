import React, { ReactNode } from 'react';

import Header from '../Header/Header';
import TransitionLayout from './transitionLayout';

type WrapperLayoutProps = {
  children: ReactNode | undefined;
};

const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
}: WrapperLayoutProps) => (
  <>
    <Header />
    <main className="main">
      <TransitionLayout>{children}</TransitionLayout>
    </main>
    <footer />
  </>
);

export default WrapperLayout;
