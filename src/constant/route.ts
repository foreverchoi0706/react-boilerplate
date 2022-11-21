import Todo from "@/page/Todo";
import Todos from "@/page/Todos";

const ROUTES = [
  {
    Component: Todos,
    name: "투두",
    path: "/todos",
  },
  {
    Component: Todo,
    name: "투두",
    path: "/todo/:id",
  },
] as const;

export default ROUTES;
