import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "@/theme";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ContextProvider from "@/components/ContextProvider";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const GlobalStgyle = createGlobalStyle`
    #root {
      font-family: Arial, Helvetica, sans-serif;
    }
    #modal {}
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <BrowserRouter>
            <GlobalStgyle />
            <Reset />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
