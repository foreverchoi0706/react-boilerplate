import { FC, memo } from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import Home from "pages/Home";
import About from "pages/About";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import ModalFormLogin from "components/organisms/ModalFormLogin";


const App: FC = memo(() => {
  const isLoginModalOpen = useUiStore((state) => state.isLoginModalOpen, shallow);

  useUserInfoQuery();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {isLoginModalOpen && <ModalFormLogin />}
    </BrowserRouter>
  );
});

export default App;
