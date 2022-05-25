import { useMutation } from "react-query"
import cookieController from "libs/cookieController";
import useUserStore from "hooks/stores/useUserStore";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";

const useLogin = () => {
    const [setIsLogined, setUserInfo] = useUserStore(({ setIsLogined, setUserInfo }) => [setIsLogined, setUserInfo], shallow);

    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    return useMutation((loginInfo: ILoginInfo) => {
        console.log(loginInfo);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        })
    }, {
        onSuccess: (_, loginInfo) => {
            setUserInfo({
                name: loginInfo.id,
                age: 0,
            });
            setIsLogined(true);
            setIsLoginModalOpen(false);
            cookieController.set("isLogined", "true", 60 * 60 * 24 * 1000);
        },
    });
}

export default useLogin;