import './Drawer.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useTypedSelector from '../../../hooks/useTypedSelector';
import { closeMenu, openMenu } from '../../../store/actions/appActions';

type DrawerProps = {};

const Drawer: React.FC<DrawerProps> = () => {
  const dispatch = useDispatch();
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  const menuHandler = () => {
    dispatch(menuIsOpen ? closeMenu() : openMenu());
  };

  return (
    <div className={menuIsOpen ? 'drawer open' : 'drawer'}>
      <nav className="navMenu">
        <ul className="navList">
          <li role="none" onClick={menuHandler} className="navItem">
            <Link to="/">CV</Link>
          </li>
          <li role="none" onClick={menuHandler} className="navItem">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
