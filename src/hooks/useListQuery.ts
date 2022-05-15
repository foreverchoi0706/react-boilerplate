import { useQuery } from "react-query";

const useListQuery = () => {
    return useQuery([""], () => {
    });
};

export default useListQuery;
