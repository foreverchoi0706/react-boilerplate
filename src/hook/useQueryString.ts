import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQueryString = <T extends Record<string, unknown>>() => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const queryString = useMemo<T>(
    () => Object.fromEntries(searchParams.entries()) as T,
    [searchParams]
  );

  const stringify = (obj: T) => {
    let temp = "";
    for (const [key, value] of Object.entries(obj)) {
      if (!value) continue;
      temp += `${key}=${value}&`;
    }
    return temp;
  };

  return {
    queryString,
    stringify,
  };
};

export default useQueryString;
