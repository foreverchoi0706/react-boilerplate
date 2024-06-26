import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  { FC } from "react";
import "./global.css";

import Users from "./page/Uesrs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./component/molecule/Layout";
import ROUTES from "./constant/route";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import useGlobalState from "./hook/useGlobalState";

export const queryClient = new QueryClient();

const App : FC = () => {
  const isSignIn = useGlobalState(({isSignIn})=>isSignIn);
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
      <Users />
    </QueryClientProvider>
  );
};

export default App;
