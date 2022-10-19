import create, {StateCreator} from "zustand";

import cookieController from "@/utils/cookieController";

interface IUserInfo {
    name: string | null;
    age: number | null;
}

interface IUserState {
    isSignIn: boolean;
    setIsSignIn: (isSignIn: boolean) => void;
    userinfo: IUserInfo;
    setUserInfo: (info: IUserInfo) => void;
}

const userState: StateCreator<IUserState> = (set) => ({
    isSignIn: cookieController.has("SIGN_IN"),
    setIsSignIn: (isSignIn: boolean) => set((state) => ({...state, isSignIn})),
    userinfo: {
        name: null,
        age: null,
    },
    setUserInfo: (userinfo: IUserInfo) =>
        set((state) => ({...state, userinfo})),
});

const useUserStore = create<IUserState>(userState);

export default useUserStore;