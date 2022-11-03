import Company from "@/page/Company";
import CompanyAbout from "@/page/CompanyAbout";
import User from "@/page/User";
import UserAbout from "@/page/UserAbout";

const ROUTES = [
  {
    Component: User,
    path: "/user",
    pathname: "유저",
  },
  {
    Component: UserAbout,
    path: "/user/:id",
    pathname: "유저",
  },
  {
    Component: Company,
    path: "/company",
    pathname: "회사",
  },
  {
    Component: CompanyAbout,
    path: "/company/:id",
    pathname: "회사",
  },
] as const;

export default ROUTES;
