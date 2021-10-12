import React, { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type WrapperLayoutProps = {
  children: ReactNode | undefined;
};

const WrapperLayout: React.FC<WrapperLayoutProps> = ({ children }: WrapperLayoutProps) => (
  <>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
);

export default WrapperLayout;
