import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "@/theme";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/ui/organisms/Header";
import Footer from "@/components/ui/organisms/Footer";
import AuthedRoutes from "@/components/routes/AuthedRoutes";
import useUserStore from "@/hooks/stores/useUserStore";
import ContextProvider from "@/components/ContextProvider";
import CommonRoutes from "@/components/routes/CommonRoutes";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});


const App = () => {
    console.log(process.env.NODE_ENV);
    const isAuthed = useUserStore((state) => state.isAuthed);

    console.log(isAuthed);

    return (
        <QueryClientProvider client={queryClient}>
            <ContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Reset />
                    <BrowserRouter>
                        <Header />
                        {isAuthed ? <AuthedRoutes /> : <CommonRoutes />}
                        <Footer />
                    </BrowserRouter>
                </ThemeProvider>
                <ReactQueryDevtools />
            </ContextProvider>
        </QueryClientProvider>
    );
};

export default App;
