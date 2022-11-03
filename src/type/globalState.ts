import { IAccountInfo } from "@/type/account";

export interface IGlobalState {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
  userInfo: IAccountInfo;
  setUserInfo: (userInfo: IAccountInfo) => void;
}
