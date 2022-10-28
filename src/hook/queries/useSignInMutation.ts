import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { signIn } from "@/api";
import useUserState from "@/hook/states/useUserState";
import { ISignInForm } from "@/type/account";

const useSignInMutation = () => {
  const navigate = useNavigate();
  const setIsSignIn = useUserState((state) => state.setIsSignIn);

  return useMutation<ISignInForm, AxiosError, ISignInForm>(signIn, {
    onSuccess: () => {
      setIsSignIn(true);
      navigate("/");
    },
  });
};

export default useSignInMutation;
