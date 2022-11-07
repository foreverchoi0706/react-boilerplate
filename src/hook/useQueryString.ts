import { useCallback } from "react";

import { TFunction } from "@/type/common";

const useQueryString = <T extends Record<string, any>>() => {
  const stringify = useCallback<TFunction<string, [Partial<T>]>>((obj2) => {
    if (!obj2) return "";
    let temp = "";
    for (const [key, value] of Object.entries(obj2)) {
      if (!value) continue;
      temp += `${key}=${value}&`;
    }
    return temp;
  }, []);

  return { stringify };
};

export default useQueryString;
