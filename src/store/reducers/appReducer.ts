import { AppReducerActions, IAppReducerActionsTypes, IAppReducerState } from '../../types/appReducerTypes';

const initialState: IAppReducerState = {
  theme: 'darkTheme',
  menuIsOpen: false,
};

const appReducer = (state = initialState, action: IAppReducerActionsTypes): IAppReducerState => {
  switch (action.type) {
    case AppReducerActions.DARK_THEME:
      return { ...state, theme: 'darkTheme' };
    case AppReducerActions.LIGHT_THEME:
      return { ...state, theme: 'lightTheme' };
    case AppReducerActions.MENU_OPEN:
      return { ...state, menuIsOpen: true };
    case AppReducerActions.MENU_CLOSE:
      return { ...state, menuIsOpen: false };
    default:
      return state;
  }
};

export default appReducer;
