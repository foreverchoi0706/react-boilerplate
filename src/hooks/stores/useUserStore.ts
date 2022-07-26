import create, { SetState } from "zustand";
import cookieController from "libs/cookieController";

const userStore = (set: SetState<IUserStore>) => ({
  isSignIn: cookieController.has("isLogin"),
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
