import create, { SetState } from "zustand";

export interface ISearchParams {
  keyword: string;
}

interface IList {
  searchParams: ISearchParams;
  setSearchParams: (searchParams: ISearchParams) => void;
}

const store = (set: SetState<IList>) => ({
  searchParams: {
    keyword: "",
  },
  setSearchParams: (searchParams: ISearchParams) =>
    set((state) => ({ ...state, searchParams })),
});

const useUiStore = create<IList>(store);

export default useUiStore;
