import { useMutation } from "react-query"
import cookieController from "libs/cookieController";
import useUserStore from "hooks/stores/useUserStore";
import shallow from "zustand/shallow";

const useLogin = () => {
    const setIsLogined = useUserStore((state) => state.setIsLogined, shallow);
    return useMutation((loginInfo: ILoginInfo) => {
        console.log(loginInfo);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        })
    }, {
        onSuccess: () => {
            setIsLogined(true);
            cookieController.set("isLogined", "true", 60 * 60 * 24 * 1000);
        },
    });
}

export default useLogin;