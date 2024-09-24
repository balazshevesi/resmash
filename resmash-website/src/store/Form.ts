import { atom } from "nanostores";

interface Form {
  isOpen: boolean;
  isLoading: boolean;
  isError: boolean;
  isSubmitSuccess: boolean | null;
}

const defaultState: Form = {
  isOpen: false,
  isLoading: false,
  isError: false,
  isSubmitSuccess: null,
};

export const $form = atom<Form>(defaultState);
