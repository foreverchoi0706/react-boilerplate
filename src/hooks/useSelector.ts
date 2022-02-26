import { useContext } from "react";
import { Context } from "@/components/ContextProvider";
import { IRootState } from "@/reducers/root";

const useSelector = <T>(callback: (root: IRootState) => T): T => {
  return callback(useContext(Context).root);
};

export default useSelector;
