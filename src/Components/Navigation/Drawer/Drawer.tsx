import './Drawer.scss';

import React from 'react';

import useTypedSelector from '../../../hooks/useTypedSelector';

type DrawerProps = {};

const Drawer: React.FC<DrawerProps> = () => {
  const { menuIsOpen } = useTypedSelector((state) => state.appState);
  return (
    <div className={menuIsOpen ? 'drawer open' : 'drawer'}>
      <nav className="navMenu">
        <ul className="navList">
          <li className="navItem">123</li>
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
