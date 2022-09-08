import { useQuery } from "react-query";
import shallow from "zustand/shallow";
import { USER_INFO } from "constants/keys/user";
import useUserStore from "hooks/stores/useUserStore";

const useUserInfoQuery = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo, shallow);

  return useQuery<ILoginInfo>(
    [USER_INFO],
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: "JORDAN",
            pw: "password",
            agreement: false,
            list: ["1", "2", "3", "4", "5"],
          });
        }, 500);
      });
    },
    {
      onSuccess: (loginInfo: ILoginInfo) => {
        setUserInfo(loginInfo);
      },
    }
  );
};

export default useUserInfoQuery;
