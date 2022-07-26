import { useCallback } from "react";
import shallow from "zustand/shallow";
import cookieController from "libs/cookieController";
import useUserStore from "hooks/stores/useUserStore";

const useSign = () => {
  const [isSignIn, setIsSignIn] = useUserStore(
    ({ isSignIn, setIsSignIn }) => [isSignIn, setIsSignIn],
    shallow
  );

  const signIn = useCallback(() => {
    cookieController.set("isLogin", "true", 60 * 60 * 24 * 1000);
    setIsSignIn(cookieController.has("isLogin"));
  }, []);

  const signOut = useCallback(() => {
    cookieController.delete("isLogin");
    console.log(cookieController.has("isLogin"));
    setIsSignIn(cookieController.has("isLogin"));
  }, []);

  return {
    isSignIn,
    signIn,
    signOut,
  };
};

export default useSign;
