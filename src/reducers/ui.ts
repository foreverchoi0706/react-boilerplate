import createAction from "@/libs/createAction";
import { Reducer } from "react";
import { Action } from "./root";

interface IState {
  isLoginFormOpen: boolean;
}

export const ui: IState = {
  isLoginFormOpen: false,
};

const OPEN_SIGNIN_FORM = "OPEN_SIGNIN_FORM";

export const openSigninForm = createAction<boolean>(OPEN_SIGNIN_FORM);

const reducer: Reducer<IState, Action> = (
  state = ui,
  { type, payload }
): IState => {
  switch (type) {
    case OPEN_SIGNIN_FORM:
      return state;
    default:
      return state;
  }
};

export default reducer;
