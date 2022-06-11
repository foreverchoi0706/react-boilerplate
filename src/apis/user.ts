import instance from "apis/instance";

export const getAccountInfo = () => {
  return instance.get("https://api.github.com/repos/tannerlinsley/react-query");
};
