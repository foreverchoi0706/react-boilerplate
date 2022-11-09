import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useQueryString from "@/hook/useQueryString";
import useSearchForm from "@/hook/useSearchForm";
import instance from "@/instance";
import { TFunction } from "@/type/common";
import { IFormSearchUser } from "@/type/search";
import { IUser } from "@/type/user";

const useUserListQuery: TFunction<[UseQueryResult<IUser[], AxiosError>]> = () => {
  const formSearchUser = useSearchForm<IFormSearchUser>();
  const { stringify } = useQueryString<IFormSearchUser>();

  return useQuery<IUser[], AxiosError>(
    ["USER_LIST", formSearchUser],
    () => instance.get(`/users?${stringify(formSearchUser)}`),
    {
      placeholderData: [],
      select: (data) => data,
    }
  );
};

export default useUserListQuery;
