import Todo from "@/page/Todo";
import Todos from "@/page/Todos";
import Users from "@/page/Uesrs";

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
  {
    Component: Users,
    name: "유저",
    path: "/users",
  },
] as const;

export default ROUTES;
