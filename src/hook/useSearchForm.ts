import { useLocation } from "react-router-dom";

const useSearchForm = <T extends Record<string, unknown>>() => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  return Object.fromEntries(searchParams.entries()) as T;
};

export default useSearchForm;
