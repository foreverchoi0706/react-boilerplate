import create, { StateCreator } from "zustand";

import { IGlobalState, IUserInfo } from "@/type/user";
import cookieController from "@/util/cookieController";

const globalState: StateCreator<IGlobalState> = (set) => ({
  isSignIn: cookieController.has("SIGN_IN"),
  setIsSignIn: (isSignIn: boolean) => set((state) => ({ ...state, isSignIn })),
  userInfo: {
    name: null,
  },
  setUserInfo: (userInfo: IUserInfo) =>
    set((state) => ({ ...state, userInfo })),
});

const useGlobalState = create<IGlobalState>(globalState);

export default useGlobalState;
