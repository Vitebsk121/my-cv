import { AppReducerActions } from '../../types/appReducerTypes';

export const openMenu = () => ({
  type: AppReducerActions.MENU_OPEN,
});

export const closeMenu = () => ({
  type: AppReducerActions.MENU_CLOSE,
});

export const darkTheme = () => ({
  type: AppReducerActions.DARK_THEME,
});

export const lightTheme = () => ({
  type: AppReducerActions.LIGHT_THEME,
});
