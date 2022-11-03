import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import useQueryString from "@/hook/useQueryString";
import { TFormSearchUser } from "@/type/search";
import { IUser } from "@/type/user";

const useUserListQuery = (searchFormUser: TFormSearchUser) => {
  const { stringify } = useQueryString<TFormSearchUser>();

  return useQuery<AxiosResponse<IUser[]>, AxiosError, IUser[]>(
    ["USER_LIST", searchFormUser],
    () =>
      axios.get(
        `https://jsonplaceholder.typicode.com/users?${stringify(
          searchFormUser
        )}`
      ),
    {
      select: (data) => data.data,
    }
  );
};

export default useUserListQuery;
