import React, {lazy} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Reset} from "styled-reset";
import theme from "@/theme";
import Home from "@/pages/Home";
// import About from "@/pages/About";
import ContextProvider from "@/components/ContextProvider";
import Header from "@/components/common/organisms/Header";
import Footer from "@/components/common/organisms/Footer";

const About = lazy(() => import("@/pages/About"));

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

const GlobalStyle = createGlobalStyle`
  body {
    * {
      font-family: 'Jua', sans-serif;
      letter-spacing: 0.5px;
      font-size: 16px;
    }
  }
`;

const App = () => {
    console.log(process.env.NODE_ENV);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <ContextProvider>
                    <BrowserRouter>
                        <GlobalStyle/>
                        <Reset/>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/*" element={<Navigate to="/"/>}/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </ContextProvider>
            </ThemeProvider>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
};

export default App;
