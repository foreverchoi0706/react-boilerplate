interface IFormSearch {
  page: string;
}

export interface IFormSearchUser extends IFormSearch {
  companyId: string;
  endAt: string;
  id: string;
  name: string;
  startAt: string;
}
