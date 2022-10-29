import { useCallback } from "react";
import shallow from "zustand/shallow";

import useGlobalState from "@/hook/states/useGlobalState";
import cookieController from "@/util/cookieController";

const useSign = () => {
  const { isSignIn, setIsSignIn } = useGlobalState((state) => state, shallow);

  const signIn = useCallback(() => {
    cookieController.set(
      "SIGN_IN",
      new Date().getTime().toString(),
      60 * 60 * 1000
    );
    setIsSignIn(cookieController.has("SIGN_IN"));
  }, []);

  const signOut = useCallback(() => {
    cookieController.delete("SIGN_IN");
    setIsSignIn(cookieController.has("SIGN_IN"));
  }, []);

  return {
    isSignIn,
    signIn,
    signOut,
  };
};

export default useSign;
