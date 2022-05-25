import create, { SetState } from "zustand";
import cookieController from "libs/cookieController";

const userStore = (set: SetState<IUserStore>) => ({
    userinfo: {
        name: null,
        age: null
    },
    isLogined: cookieController.isExist("isLogined"),
    setUserInfo: (userinfo: IUserInfo) => set((state) => ({ ...state, userinfo })),
    setIsLogined: (isLogined: boolean) => set((state) => ({ ...state, isLogined, })),
})

const useUserStore = create<IUserStore>(userStore);

export default useUserStore;