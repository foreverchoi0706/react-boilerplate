import create, { SetState } from "zustand";
import { setCookie, isExistCookie } from "libs/cookieController";

interface IUser {
    isLogined: boolean;
    name: string;
    age: number;
    setIsLogined: (isLogined: boolean) => void;
    setName: (name: string) => void;
    setAge: (age: number) => void;
}

const store = (set: SetState<IUser>) => ({
    isLogined: isExistCookie("isLogined"),
    name: "",
    age: 0,
    setIsLogined: (isLogined: boolean) => set((state) => {
        setCookie("isLogined", "true", 86400000);
        return {
            ...state,
            isLogined,
        }
    }),
    setName: (name: string) => set((state) => ({ ...state, name, })),
    setAge: (age: number) => set((state) => ({ ...state, age, }))
})

const useUserStore = create<IUser>(store);

export default useUserStore;