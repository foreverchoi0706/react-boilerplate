export interface IUserInfo {
  name: string | null;
}

export interface IGlobalState {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
}
