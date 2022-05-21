import { useMutation } from "react-query"
import { FieldValues } from "react-hook-form";
import { setCookie } from "libs/cookieController";
import useUserStore from "hooks/stores/useUserStore";
import shallow from "zustand/shallow";

const useLogin = () => {
    const setIsLogined = useUserStore((state) => state.setIsLogined, shallow);

    return useMutation((fieldValues: FieldValues) => {
        console.log(fieldValues);
        return Promise.resolve(true);
    }, {
        onSuccess: () => {
            setIsLogined(true);
            setCookie("isLogined", "true", 60 * 60 * 24 * 1000);
        },
    });
}

export default useLogin;