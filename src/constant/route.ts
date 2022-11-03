import Company from "@/page/Company";
import CompanyInfo from "@/page/CompanyInfo";
import User from "@/page/User";
import UserInfo from "@/page/UserInfo";

const ROUTES = [
  {
    Component: User,
    name: "유저",
    path: "/user",
  },
  {
    Component: UserInfo,
    name: "유저",
    path: "/user/:id",
  },
  {
    Component: Company,
    name: "투두",
    path: "/todo",
  },
  {
    Component: CompanyInfo,
    name: "회사",
    path: "/todo/:id",
  },
] as const;

export default ROUTES;
