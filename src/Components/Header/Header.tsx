import './Header.scss';

import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from '../../hooks/useTypedSelector';
import { darkTheme, lightTheme } from '../../store/actions/appActions';
import Drawer from '../Navigation/Drawer/Drawer';
import MenuBurger from '../Navigation/MenuBurger/MenuBurger';
import Backdrop from '../UI/Backdrop/Backdrop';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.appState);

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  });

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
      <Switch size={windowSize < 400 ? 'small' : 'medium'} onChange={themeHandler} />
      <Drawer />
      <Backdrop />
    </div>
  );
};

export default Header;
