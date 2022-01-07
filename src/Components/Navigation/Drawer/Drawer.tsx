import './Drawer.scss';

import React from 'react';

import useTypedSelector from '../../../hooks/useTypedSelector';
import Nav from '../Nav/Nav';

type DrawerProps = {};

const Drawer: React.FC<DrawerProps> = () => {
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  return (
    <div className={menuIsOpen ? 'drawer open' : 'drawer'}>
      <Nav />
    </div>
  );
};

export default Drawer;
