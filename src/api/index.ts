import { ISignInForm } from "@/type/account";

export const signIn = (singInForm: ISignInForm): Promise<ISignInForm> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(singInForm);
    }, 500);
  });
};
