import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useCardsQuery = () => {
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
