type TSearch = {
  page: string;
};

export type TFormSearchUser = TSearch & {
  companyId: string;
  endAt: string;
  id: string;
  name: string;
  startAt: string;
};
