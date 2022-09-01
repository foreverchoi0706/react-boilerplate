import { useQueries } from "react-query";
import axios from "axios";

const useTestQueries = () => {
  return useQueries([
    {
      queryKey: ["post", 1],
      queryFn: () =>
        axios.get("https://api.github.com/repos/tannerlinsley/react-query"),
      staleTime: Infinity,
    },
    {
      queryKey: ["post", 2],
      queryFn: () =>
        axios.get("https://api.github.com/repos/tannerlinsley/react-query"),
      staleTime: Infinity,
    },
  ]);
};

export default useTestQueries;
