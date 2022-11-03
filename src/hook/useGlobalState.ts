import create, { StateCreator } from "zustand";

import { IAccountInfo } from "@/type/account";
import { IGlobalState } from "@/type/globalState";
import cookieController from "@/util/cookieController";

const globalState: StateCreator<IGlobalState> = (set) => ({
  isSignIn: cookieController.has("SIGN_IN"),
  setIsSignIn: (isSignIn: boolean) => set((state) => ({ ...state, isSignIn })),
  userInfo: {
    name: null,
  },
  setUserInfo: (userInfo: IAccountInfo) =>
    set((state) => ({ ...state, userInfo })),
});

const useGlobalState = create<IGlobalState>(globalState);

export default useGlobalState;
