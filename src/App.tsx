import { FC, memo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import theme from "theme";
import Home from "pages/Home";
import About from "pages/About";
import GlobalStyle from "components/GlobalStyle";
import Header from "components/ui/organisms/Header";
import Footer from "components/ui/organisms/Footer";
import ModalFormLogin from "components/ui/organisms/ModalFormLogin";

export const queryClient = new QueryClient();

const App: FC = memo(() => {
  const isLoginModalOpen = useUiStore((state) => state.isLoginModalOpen, shallow);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <BrowserRouter>
          {isLoginModalOpen && <ModalFormLogin />}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
});

export default App;
