import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import { ICard } from "@/type/card";

const useCardsQuery = () => {
  return useQuery<AxiosResponse<ICard[]>, AxiosError, ICard[]>(
    ["CARDS"],
    () => {
      return axios.get<ICard[]>("test");
    }
  );
};

export default useCardsQuery;
