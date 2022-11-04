import { useCallback, useMemo } from "react";

import { TFunction } from "@/type/common";

const useQueryString = <T extends Record<string, any>>(target: T) => {
  const parse = useCallback<TFunction<string, [T]>>((obj2) => {
    let temp = "";
    console.log(obj2);
    for (const [key, value] of Object.entries(obj2)) {
      if (!value) continue;
      temp += `${key}=${value}&`;
    }
    return temp;
  }, []);

  const queryString = useMemo<string>(() => parse(target), [target]);

  return { parse, queryString };
};

export default useQueryString;
