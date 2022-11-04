import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import useQueryString from "@/hook/useQueryString";
import instance from "@/instance";
import { IFormSearchUser } from "@/type/search";
import { IUser } from "@/type/user";
import { TFunction } from "@/type/common";

const useUserListQuery: TFunction<UseQueryResult<IUser[], AxiosError>, [IFormSearchUser]> = (formSearchUser) => {
  const { queryString } = useQueryString<IFormSearchUser>(formSearchUser);

  return useQuery<AxiosResponse<IUser[]>, AxiosError, IUser[]>(
    ["USER_LIST", queryString],
    () => instance.get(`/users?${queryString}`),
    {
      select: (data) => data.data,
    }
  );
};

export default useUserListQuery;
