import Company from "@/page/Company";
import CompanyAbout from "@/page/CompanyAbout";
import User from "@/page/User";
import UserAbout from "@/page/UserAbout";

const ROUTES = [
  {
    Element: User,
    path: "/user",
    pathname: "유저",
  },
  {
    Element: UserAbout,
    path: "/user/:id",
    pathname: "유저",
  },
  {
    Element: Company,
    path: "/company",
    pathname: "회사",
  },
  {
    Element: CompanyAbout,
    path: "/company/:id",
    pathname: "회사",
  },
] as const;

export default ROUTES;
