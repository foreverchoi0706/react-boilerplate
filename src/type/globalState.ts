import { IAccountInfo } from "@/type/account";
import { TFunction } from "@/type/common";

export interface IGlobalState {
  isSignIn: boolean;
  setIsSignIn: TFunction<void, [boolean]>
  accountInfo: IAccountInfo;
  setAccountInfo: TFunction<void, [IAccountInfo]>
}
