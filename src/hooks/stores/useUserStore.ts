import create, { SetState } from "zustand";

const userStore = (set: SetState<IUserStore>) => ({
    userinfo: {
        name: null,
        age: null
    },
    isLogin: false,
    setUserInfo: (userinfo: IUserInfo) => set((state) => ({ ...state, userinfo })),
    setIsLogin: (isLogin: boolean) => set((state) => ({ ...state, isLogin, })),
})

const useUserStore = create<IUserStore>(userStore);

export default useUserStore;