import './Header.scss';

import Switch from '@mui/material/Switch';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from '../../hooks/useTypedSelector';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { darkTheme, lightTheme } from '../../store/actions/appActions';
import Drawer from '../Navigation/Drawer/Drawer';
import MenuBurger from '../Navigation/MenuBurger/MenuBurger';
import Backdrop from '../UI/Backdrop/Backdrop';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.appState);

  useWindowWidth(setWindowSize);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === null) {
      localStorage.setItem('theme', theme);
    } else if (localTheme === 'lightTheme') {
      dispatch(lightTheme());
    } else {
      dispatch(darkTheme());
    }
  }, []);

  const themeHandler = () => {
    if (theme === 'darkTheme') {
      dispatch(lightTheme());
    } else {
      dispatch(darkTheme());
    }
  };

  return (
    <div className="header">
      <MenuBurger />
      <div className="logo" />
      <Switch size={windowSize < 400 ? 'small' : 'medium'} checked={theme === 'darkTheme'} onChange={themeHandler} />
      <Drawer />
      <Backdrop />
    </div>
  );
};

export default Header;
