import React, { ReactNode } from 'react';

import TransitionLayout from './transitionLayout';

type WrapperLayoutProps = {
  children: ReactNode | undefined;
};

const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
}: WrapperLayoutProps) => (
  <>
    <header />
    <main>
      <TransitionLayout>{children}</TransitionLayout>
    </main>
    <footer />
  </>
);

export default WrapperLayout;
