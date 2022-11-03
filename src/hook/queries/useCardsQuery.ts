import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TFormSearchUser } from "@/type/search";

const useCardsQuery = (searchFormUser: TFormSearchUser) => {
  console.log(searchFormUser);
  return useQuery<string[], AxiosError, string[]>(["CARDS"], () => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve([
          "AAA",
          "BBB",
          "CCC",
          "DDD",
          "EEE",
          "FFF",
          "GGG",
          "HHH",
          "III",
          "JJJ",
          "KKK",
        ]);
      }, 200);
    });
  });
};

export default useCardsQuery;
