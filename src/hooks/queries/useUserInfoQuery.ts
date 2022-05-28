import { useQuery } from "react-query";
import shallow from "zustand/shallow";
import { USER_INFO } from "keys/user";
import useUserStore from "hooks/stores/useUserStore";
import cookieController from "libs/cookieController";


const useUserInfoQuery = () => {
    const [setIsLogined, setUserInfo] = useUserStore(({ setIsLogined, setUserInfo }) => [setIsLogined, setUserInfo], shallow);

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
        enabled: cookieController.isExist("isLogined"),
        refetchOnWindowFocus: false,
        onSuccess: (userInfo: IUserInfo) => {
            setUserInfo(userInfo);
            setIsLogined(true);
        }
    })
}

export default useUserInfoQuery;