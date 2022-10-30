import { useLocation } from "react-router-dom";

const useQueryString = <T extends Record<string, any>>() => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const stringify = (obj: T) => {
    console.log(obj);
    return "1";
  };

  return {
    queryString: Object.fromEntries(searchParams.entries()),
    stringify,
  };
};

export default useQueryString;
