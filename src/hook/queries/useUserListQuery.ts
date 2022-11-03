import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import useQueryString from "@/hook/useQueryString";
import instance from "@/instance";
import { TFormSearchUser } from "@/type/search";
import { IUser } from "@/type/user";

const useUserListQuery = (formSearchUser: TFormSearchUser) => {
  const { queryString } = useQueryString<TFormSearchUser>(formSearchUser);

  return useQuery<AxiosResponse<IUser[]>, AxiosError, IUser[]>(
    ["USER_LIST", queryString],
    () => instance.get(`/users?${queryString}`),
    {
      select: (data) => data.data,
    }
  );
};

export default useUserListQuery;
