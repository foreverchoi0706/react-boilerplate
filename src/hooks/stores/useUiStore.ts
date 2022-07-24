import { ReactElement } from "react";
import create, { SetState } from "zustand";

interface IUi {
  Modal: ReactElement | null;
  setModal: (Modal: ReactElement | null) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
}

const store = (set: SetState<IUi>) => ({
  Modal: null,
  setModal: (Modal: ReactElement | null) =>
    set((state) => ({ ...state, Modal })),

  isLoginModalOpen: false,
  setIsLoginModalOpen: (isLoginModalOpen: boolean) =>
    set((state) => ({ ...state, isLoginModalOpen })),
});

const useUiStore = create<IUi>(store);

export default useUiStore;
