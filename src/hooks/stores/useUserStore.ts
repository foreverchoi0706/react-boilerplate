import create, { SetState } from "zustand";

const userStore = (set: SetState<IUserStore>) => ({
    userinfo: {
        name: null,
        age: null
    },
    isLogined: false,
    setUserInfo: (userinfo: IUserInfo) => set((state) => ({ ...state, userinfo })),
    setIsLogined: (isLogined: boolean) => set((state) => ({ ...state, isLogined, })),
})

const useUserStore = create<IUserStore>(userStore);

export default useUserStore;