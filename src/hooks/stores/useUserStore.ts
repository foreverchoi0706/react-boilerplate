import create, { SetState } from "zustand";
import { isExistCookie } from "libs/cookieController";

interface IInfo {
    name: string | null;
    age: number | null;
}

interface IUser {
    isLogined: boolean;
    info: IInfo | null;
    setIsLogined: (isLogined: boolean) => void;
    setInfo: (info: IInfo) => void;
}

const store = (set: SetState<IUser>) => ({
    isLogined: isExistCookie("isLogined"),
    info: {
        name: null,
        age: null
    },
    setIsLogined: (isLogined: boolean) => set((state) => ({ ...state, isLogined, })),
    setInfo: (info: IInfo) => set((state) => ({ ...state, info }))
})

const useUserStore = create<IUser>(store);

export default useUserStore;