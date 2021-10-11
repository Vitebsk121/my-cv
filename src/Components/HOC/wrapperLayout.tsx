import React, { ReactNode } from 'react';

import Header from '../Header/Header';
import TransitionLayout from './transitionLayout';
import Footer from "../Footer/Footer";

type WrapperLayoutProps = {
  children: ReactNode | undefined;
};

const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
}: WrapperLayoutProps) => (
  <>
    <Header />
    <main className="main">
{/*TODO ADD TRANSITION*/}
      {/*<TransitionLayout>*/}
        {children}
      {/*</TransitionLayout>*/}
    </main>
    <Footer />
  </>
);

export default WrapperLayout;
