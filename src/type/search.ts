interface IFormSearch {
  page: number;
}

export interface IFormSearchTodos extends IFormSearch {
  userId: number;
  title: string;
}
