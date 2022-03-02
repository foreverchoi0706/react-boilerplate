import { Reducer } from "react";
import { Action } from "./root";

interface IState {
  isLoginFormOpen: boolean;
}

export const ui: IState = {
  isLoginFormOpen: false,
};

const IS_LOGIN_FORM_OPEN = "IS_LOGIN_FORM_OPEN" as const;

export const isLoginFormOpen = (payload: boolean) => ({
  type: IS_LOGIN_FORM_OPEN,
  payload,
});

const reducer: Reducer<IState, Action> = (
  state = ui,
  { type, payload }
): IState => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
