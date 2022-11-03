import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import useGlobalState from "@/hook/useGlobalState";
import useSign from "@/hook/useSign";
import { ISignInForm } from "@/type/account";

const useSignInMutation = () => {
  const navigate = useNavigate();
  const { signIn } = useSign();
  const { setUserInfo } = useGlobalState();
  return useMutation<ISignInForm, AxiosError, ISignInForm>(
    (singInForm) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(singInForm);
        }, 500);
      });
    },
    {
      onSuccess: (singInForm) => {
        console.log(singInForm);
        signIn();
        setUserInfo({
          name: singInForm.id,
        });
        navigate("/");
      },
    }
  );
};

export default useSignInMutation;
