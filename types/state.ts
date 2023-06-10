export interface OverlayState {
  terminal: boolean;
  cv: boolean;
  mail: boolean;
  projects: boolean;
}

export interface AppState {
  isSmallScreen: boolean;
  isAppLoading: boolean;
}

export type OverlayKey = keyof OverlayState;
