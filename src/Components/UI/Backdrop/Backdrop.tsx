import './Backdrop.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from '../../../hooks/useTypedSelector';
import { closeMenu, openMenu } from '../../../store/actions/appActions';

type BackdropProps = {};

const Backdrop: React.FC<BackdropProps> = () => {
  const dispatch = useDispatch();
  const { menuIsOpen } = useTypedSelector((state) => state.appState);

  const menuHandler = () => {
    dispatch(menuIsOpen ? closeMenu() : openMenu());
  };

  return <div role="none" className={menuIsOpen ? 'backdrop open' : 'backdrop'} onClick={menuHandler} />;
};

export default Backdrop;
