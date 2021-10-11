import './Nav.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useTypedSelector from '../../../hooks/useTypedSelector';
import { closeMenu, openMenu } from '../../../store/actions/appActions';

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const dispatch = useDispatch();
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  const menuHandler = () => {
    dispatch(menuIsOpen ? closeMenu() : openMenu());
  };

  return (
    <nav className="navMenu">
      <ul className="navList">
        <li role="none" onClick={menuHandler} className="navItem">
          <Link className="navLink" to="/">
            My CV
          </Link>
        </li>
        <li role="none" onClick={menuHandler} className="navItem">
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
