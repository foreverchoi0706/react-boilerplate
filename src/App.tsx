import React, { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./global.css";

import Layout from "@/component/molecule/Layout";
import ROUTES from "@/constant/route";
import useSign from "@/hook/useSign";
import SignIn from "@/page/SignIn";
import SignUp from "@/page/SignUp";

export const queryClient = new QueryClient();

const App = () => {
  const { isSignIn } = useSign();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          {isSignIn ? (
            <Layout.SignIn>
              <Routes>
                {ROUTES.map(({ Component, path }) => (
                  <Route key={path} element={<Component />} path={path} />
                ))}
                <Route element={<Navigate replace to="/todos" />} path="/*" />
              </Routes>
            </Layout.SignIn>
          ) : (
            <Layout.SignOut>
              <Routes>
                <Route element={<SignIn />} path="/sign-in" />
                <Route element={<SignUp />} path="/sign-up" />
                <Route element={<Navigate replace to="/sign-in" />} path="/*" />
              </Routes>
            </Layout.SignOut>
          )}
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
