import create, { SetState } from "zustand";

interface IUi {
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
}

const store = (set: SetState<IUi>) => ({
    isLoginModalOpen: false,
    setIsLoginModalOpen: (isLoginModalOpen: boolean) => set((state) => ({ ...state, isLoginModalOpen, })),
})

const useUiStore = create<IUi>(store);

export default useUiStore;