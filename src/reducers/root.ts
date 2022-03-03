import { Reducer } from "react";
import userReducer, { user } from "@/reducers/user";
import uiReducer, { ui } from "@/reducers/ui";

export const rootState = {
  user,
  ui,
};

export interface Action {
  type: string;
  payload: any;
}
export type IRootState = ReturnType<() => typeof rootState>;

const reducer: Reducer<IRootState, Action> = ({ user, ui }, action) => {
  return {
    user: userReducer(user, action),
    ui: uiReducer(ui, action),
  };
};

export default reducer;
