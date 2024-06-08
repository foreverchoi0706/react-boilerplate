import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TODOS } from "@/constant/queryKey";
import useQueryString from "@/hook/useQueryString";
import useSearchForm from "@/hook/useSearchForm";
import instance from "@/instance";
import { TFunction } from "@/type/common";
import { IFormSearchTodos } from "@/type/search";
import { ITodo } from "@/type/todo";

const useTodosQuery: TFunction<
  [],
  UseQueryResult<ITodo[], AxiosError>
> = () => {
  const formSearchTodos = useSearchForm<IFormSearchTodos>();
  const { stringify } = useQueryString<IFormSearchTodos>();

  return useQuery<ITodo[], AxiosError>(

    {
      queryKey :  [TODOS, formSearchTodos],
    queryFn :   () => instance.get(`/todos?${stringify(formSearchTodos)}`),
      select: (response) => response || [],
    }
  );
};

export default useTodosQuery;
