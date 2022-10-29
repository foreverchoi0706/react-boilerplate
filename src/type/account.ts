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

export type TSignUpForm = typeof INITIAL_SIGN_UP_FORM;

export const INITIAL_FORM_SEARCH = {
  id: "",
  name: "",
  companyId: "",
  companyName: "",
  startAt: "",
  endAt: "",
  status: "",
};

export type TFormSearch = typeof INITIAL_FORM_SEARCH;
