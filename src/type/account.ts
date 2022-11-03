export const INITIAL_HISTORY = { title: "", contents: "" };

export type THistory = typeof INITIAL_HISTORY;

export const INITIAL_SIGN_IN_FORM = {
  id: "",
  password: "",
};

export type TSignInForm = typeof INITIAL_SIGN_IN_FORM;

export const INITIAL_SIGN_UP_FORM = {
  id: "",
  password: "",
  repassword: "",
};
