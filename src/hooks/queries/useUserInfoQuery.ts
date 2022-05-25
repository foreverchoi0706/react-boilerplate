import { useQuery } from "react-query";
import shallow from "zustand/shallow";
import { USER_INFO } from "keys/user";
import useUserStore from "hooks/stores/useUserStore";


const useUserInfoQuery = () => {
    const [isLogined, setUserInfo] = useUserStore(({ isLogined, setUserInfo }) => [isLogined, setUserInfo], shallow);

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
        enabled: isLogined,
        refetchOnWindowFocus: false,
        onSuccess: (userInfo: IUserInfo) => {
            setUserInfo(userInfo);
        }
    })
}

export default useUserInfoQuery;