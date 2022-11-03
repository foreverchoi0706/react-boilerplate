type TSearch = {
  page: string;
  size: string;
};

export type TFormSearchUser = TSearch & {
  companyId: string;
  endAt: string;
  id: string;
  name: string;
  startAt: string;
};
