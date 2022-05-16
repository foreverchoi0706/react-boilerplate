import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "@/theme";
import useUserStore from "@/hooks/stores/useUserStore";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/ui/organisms/Header";
import Footer from "@/components/ui/organisms/Footer";
import AuthedRoutes from "@/components/routes/AuthedRoutes";
import CommonRoutes from "@/components/routes/CommonRoutes";
import ContextProvider from "@/components/ContextProvider";


export const queryClient = new QueryClient();


const App = () => {
    console.log(process.env.NODE_ENV);
    const isAuthed = useUserStore((user) => user.isAuthed);
    console.log(isAuthed);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Reset />
                <ContextProvider>
                    <BrowserRouter>
                        <Header />
                        {isAuthed ? <AuthedRoutes /> : <CommonRoutes />}
                        <Footer />
                    </BrowserRouter>
                </ContextProvider>
            </ThemeProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default App;
