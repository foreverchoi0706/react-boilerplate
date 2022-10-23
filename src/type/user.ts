export interface IUserInfo {
  name: string | null;
  age: number | null;
}

export interface IUserState {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
  userinfo: IUserInfo;
  setUserInfo: (info: IUserInfo) => void;
}
