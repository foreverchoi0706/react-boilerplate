import produce from "immer";
import { Reducer } from "react";
import { Action } from "./root";

interface IState {
  isSignIned: boolean;
  isAuthed: boolean;
  name: string;
}

export const user: IState = {
  isSignIned: false,
  isAuthed: false,
  name: "CHOI",
};

export const chnageUserName = (payload?: string): Action => ({
  type: "CHANGE_USER_NAME",
  payload,
});

const reducer: Reducer<IState, Action> = (
  state = user,
  { type, payload }
): IState => {
  switch (type) {
    case chnageUserName().type:
      return produce(state, (draft) => {
        draft.name = payload;
      });
    default:
      return state;
  }
};

export default reducer;
