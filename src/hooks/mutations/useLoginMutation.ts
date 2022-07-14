import { useMutation } from "react-query";
import shallow from "zustand/shallow";
import cookieController from "libs/cookieController";
import useUserStore from "hooks/stores/useUserStore";
import useUiStore from "hooks/stores/useUiStore";

const useLoginMutation = () => {
  const [setIsLogin, setUserInfo] = useUserStore(
    ({ setIsLogin, setUserInfo }) => [setIsLogin, setUserInfo],
    shallow
  );

  const setIsLoginModalOpen = useUiStore(
    (state) => state.setIsLoginModalOpen,
    shallow
  );

  return useMutation<IResponse, IError, ILoginInfo>(
    (loginInfo) => {
      console.log(loginInfo);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    },
    {
      onSuccess: (_, loginInfo) => {
        setUserInfo(loginInfo);
        setIsLogin(true);
        setIsLoginModalOpen(false);
        cookieController.set("isLogin", "true", 60 * 60 * 24 * 1000);
      },
    }
  );
};

export default useLoginMutation;
