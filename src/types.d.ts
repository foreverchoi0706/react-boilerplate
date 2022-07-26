//user

interface IUserInfo {
  name: string | null;
  age: number | null;
}

interface IUserStore {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
  userinfo: IUserInfo;
  setUserInfo: (info: IInfo) => void;
}

interface IResponse {}

interface IError {}

interface ILoginInfo {
  id: string;
  pw: string;
  agreement: boolean;
  list: string[];
}
