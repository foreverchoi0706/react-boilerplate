import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "@/theme";
import ContextProvider from "@/components/ContextProvider";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";

export const queryClient = new QueryClient();

const GlobalStgyle = createGlobalStyle`
    #root {
      font-family: Arial, Helvetica, sans-serif;
      max-width: 1200px; 
      margin: 0 auto;
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
            <ReactQueryDevtools />
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
