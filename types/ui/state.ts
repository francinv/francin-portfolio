export interface OverlayState {
  terminal: boolean;
  cv: boolean;
  mail: boolean;
  projects: boolean;
}

export type OverlayKey = keyof OverlayState;
