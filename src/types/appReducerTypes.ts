export interface IAppReducerState {
  theme: string;
  menuIsOpen: boolean;
}

export enum AppReducerActions {
  LIGHT_THEME = 'LIGHT_THEME',
  DARK_THEME = 'DARK_THEME',
  MENU_OPEN = 'MENU_OPEN',
  MENU_CLOSE = 'MENU_CLOSE',
}

export interface IAppReducerActionsTypes {
  type: AppReducerActions;
}
