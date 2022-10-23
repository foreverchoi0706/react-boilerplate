import create, { StateCreator } from "zustand";

import { IUserInfo, IUserState } from "@/type/user";
import cookieController from "@/util/cookieController";

const userState: StateCreator<IUserState> = (set) => ({
  isSignIn: cookieController.has("SIGN_IN"),
  setIsSignIn: (isSignIn: boolean) => set((state) => ({ ...state, isSignIn })),
  userinfo: {
    name: null,
    age: null,
  },
  setUserInfo: (userinfo: IUserInfo) =>
    set((state) => ({ ...state, userinfo })),
});

const useUserState = create<IUserState>(userState);

export default useUserState;
