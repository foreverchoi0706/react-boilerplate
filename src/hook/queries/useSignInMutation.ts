import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import useUserState from "@/hook/states/useUserState";
import { ISigInForm } from "@/type/account";

const useSignInMutation = () => {
  const setIsSignIn = useUserState((state) => state.setIsSignIn);
  return useMutation<AxiosResponse, AxiosError, ISigInForm>(
    (sigInForm) => {
      console.log(sigInForm);
      return axios.post<ISigInForm>("test", sigInForm);
    },
    {
      onSuccess: () => setIsSignIn(true),
    }
  );
};

export default useSignInMutation;
