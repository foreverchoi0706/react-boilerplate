import create, { SetState } from "zustand";
import { KEY } from "@/constants/keys/user";
import cookieController from "@/libs/cookieController";

const userStore = (set: SetState<IUserStore>) => ({
  isSignIn: cookieController.has(KEY),
  setIsSignIn: (isSignIn: boolean) => set((state) => ({ ...state, isSignIn })),
  userinfo: {
    name: null,
    age: null,
  },
  setUserInfo: (userinfo: IUserInfo) =>
    set((state) => ({ ...state, userinfo })),
});

const useUserStore = create<IUserStore>(userStore);

export default useUserStore;
