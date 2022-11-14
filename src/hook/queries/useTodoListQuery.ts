import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useQueryString from "@/hook/useQueryString";
import useSearchForm from "@/hook/useSearchForm";
import instance from "@/instance";
import { TFunction } from "@/type/common";
import { IFormSearchUser } from "@/type/search";
import { ITodo } from "@/type/todo";

const useTodoListQuery: TFunction<
  [],
  UseQueryResult<ITodo[], AxiosError>
> = () => {
  const formSearchUser = useSearchForm<IFormSearchUser>();
  const { stringify } = useQueryString<IFormSearchUser>();

  return useQuery<ITodo[], AxiosError>(
    ["USER_LIST", formSearchUser],
    () => instance.get(`/todos?${stringify(formSearchUser)}`),
    {}
  );
};

export default useTodoListQuery;
