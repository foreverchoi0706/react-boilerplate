import { IAccountInfo } from "@/type/account";
import { TFunction } from "@/type/common";

export interface IGlobalState {
  isSignIn: boolean;
  setIsSignIn: TFunction<[boolean]>;
  accountInfo: IAccountInfo;
  setAccountInfo: TFunction<[IAccountInfo]>;
}
