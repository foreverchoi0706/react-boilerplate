import produce from "immer";
import { Reducer } from "react";
import { Action } from "./root";
import createAction from "@/libs/createAction";

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

const CHANGE_USER_NAME = "CHANGE_USER_NAME";

export const changeUserName = createAction<string>(CHANGE_USER_NAME);

const reducer: Reducer<IState, Action> = (
  state = user,
  { type, payload }
): IState => {
  switch (type) {
    case CHANGE_USER_NAME:
      return produce(state, (draft) => {
        draft.name = payload;
      });
    default:
      return state;
  }
};

export default reducer;
