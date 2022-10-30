import React, { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/component/Layout";
import useSign from "@/hook/useSign";
import Company from "@/page/Company";
import CompanyAbout from "@/page/CompanyAbout";
import SignIn from "@/page/SignIn";
import SignUp from "@/page/SignUp";
import User from "@/page/User";
import UserAbout from "@/page/UserAbout";

export const queryClient = new QueryClient();

const App = () => {
  const { isSignIn } = useSign();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          {isSignIn ? (
            <Layout.Main>
              <Routes>
                <Route element={<User />} path="/user" />
                <Route element={<UserAbout />} path="/user/:id" />
                <Route element={<Company />} path="/company" />
                <Route element={<CompanyAbout />} path="/company/:id" />
                <Route element={<Navigate replace to="/user" />} path="/*" />
              </Routes>
            </Layout.Main>
          ) : (
            <Layout.Sub>
              <Routes>
                <Route element={<SignIn />} path="/sign-in" />
                <Route element={<SignUp />} path="/sign-up" />
                <Route element={<Navigate replace to="/sign-in" />} path="/*" />
              </Routes>
            </Layout.Sub>
          )}
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
