import { useQuery } from "react-query";
import shallow from "zustand/shallow";
import { USER_INFO } from "keys/user";
import useUserStore from "hooks/stores/useUserStore";
import cookieController from "libs/cookieController";


const useUserInfoQuery = () => {
    const [setIsLogin, setUserInfo] = useUserStore(({ setIsLogin, setUserInfo }) => [setIsLogin, setUserInfo], shallow);

    return useQuery([USER_INFO], () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    name: "JORDAN",
                    age: 10
                })
            }, 50);
        })
    }, {
        enabled: cookieController.isExist("isLogin"),
        refetchOnWindowFocus: false,
        onSuccess: (userInfo: IUserInfo) => {
            setUserInfo(userInfo);
            setIsLogin(true);
        }
    })
}

export default useUserInfoQuery;