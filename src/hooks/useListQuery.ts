import { useQuery } from "react-query";

const useListQuery = () => {
  const { data } = useQuery([""], () => {});

  return { data };
};

export default useListQuery;
