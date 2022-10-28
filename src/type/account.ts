export const INITIAL_HISTORY = { title: "", contents: "" };

export type THistory = typeof INITIAL_HISTORY;

export interface ISignInForm {
  id: string;
  password: string;
}

export interface ISignUpForm {
  id: string;
  password: string;
}
