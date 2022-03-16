import {Dispatch, useContext} from "react";
import {Context} from "@/components/ContextProvider";
import {Action} from "@/reducers/root";

const useDispatch = (): Dispatch<Action> => {
  return useContext(Context).dispatch;
};

export default useDispatch;
