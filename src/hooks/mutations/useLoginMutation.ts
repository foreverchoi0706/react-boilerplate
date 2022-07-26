import { useMutation } from "react-query";
import shallow from "zustand/shallow";
import useSign from "hooks/useSign";
import useUserStore from "hooks/stores/useUserStore";

const useLoginMutation = () => {
  const { signIn } = useSign();

  const setUserInfo = useUserStore((state) => state.setUserInfo, shallow);

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
        signIn();
      },
    }
  );
};

export default useLoginMutation;
