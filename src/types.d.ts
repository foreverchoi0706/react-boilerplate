//user

interface IUserInfo {
  name: string | null;
  age: number | null;
}

interface IUserStore {
  userinfo: IUserInfo;
  isLogin: boolean;
  setUserInfo: (info: IInfo) => void;
  setIsLogin: (isLogin: boolean) => void;
}

interface IResponse {}

interface IError {}

interface ILoginInfo {
  id: string;
  pw: string;
  agreement: boolean;
  list: string[];
}
