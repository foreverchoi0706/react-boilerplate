export interface IAccountInfo extends Record<string, string | null> {
  name: string | null;
}
export interface ISignInForm extends Record<string, string> {
  id: string;
  password: string;
}
export interface ISignUpForm extends Record<string, string> {
  id: string;
  password: string;
  repassword: string;
}
