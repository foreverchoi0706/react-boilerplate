//user

interface IUserInfo {
    name: string | null;
    age: number | null;
}

interface IUserStore {
    userinfo: IUserInfo;
    isLogined: boolean;
    setUserInfo: (info: IInfo) => void;
    setIsLogined: (isLogined: boolean) => void;
}

declare interface ILoginInfo {
    id: string;
    pw: string;
    agreement: boolean;
}