import { ISigInForm } from "@/component/organism/FormSignIn";

export const signIn = (singInForm: ISigInForm): Promise<ISigInForm> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(singInForm);
    }, 500);
  });
};
