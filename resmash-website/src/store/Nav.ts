import { atom } from "nanostores";

interface Nav {
  isMobileOpen: boolean;
}

const defaultState: Nav = {
  isMobileOpen: false,
};

export const $nav = atom<Nav>(defaultState);
