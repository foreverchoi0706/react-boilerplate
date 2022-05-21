import useUserStore from "hooks/stores/useUserStore";
import { FieldValues } from "react-hook-form";
import { useMutation } from "react-query"
import shallow from "zustand/shallow";

const useLogin = () => {
    const setIsLogined = useUserStore((state) => state.setIsLogined, shallow);

    return useMutation((fieldValues: FieldValues) => {
        console.log(fieldValues);
        return Promise.resolve(true);
    }, {
        onSuccess: () => {
            setIsLogined(true);
        }
    });
}

export default useLogin;