import { setThemeToLocalStorage } from '../../services/localStorage';
import { AppReducerActions } from '../../types/appReducerTypes';

export const openMenu = () => ({
  type: AppReducerActions.MENU_OPEN,
});

export const closeMenu = () => ({
  type: AppReducerActions.MENU_CLOSE,
});

export const darkTheme = () => (dispatch: (arg0: { type: AppReducerActions }) => void) => {
  setThemeToLocalStorage('darkTheme');
  dispatch({
    type: AppReducerActions.DARK_THEME,
  });
};

export const lightTheme = () => (dispatch: (arg0: { type: AppReducerActions }) => void) => {
  setThemeToLocalStorage('lightTheme');
  dispatch({
    type: AppReducerActions.LIGHT_THEME,
  });
};
