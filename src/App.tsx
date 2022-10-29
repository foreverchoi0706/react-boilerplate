import React, { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/component/Layout";
import useSign from "@/hook/useSign";
import About from "@/page/About";
import Home from "@/page/Home";
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
            <Layout.Main>
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<About />} path="/about" />
                <Route element={<Navigate replace to="/" />} path="/*" />
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
