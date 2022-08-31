import {FC, memo} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import Home from "pages/Home";
import About from "pages/About";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

const App: FC = memo(() => {
  useUserInfoQuery();

  const Modal = useUiStore((state) => () => state.Modal, shallow);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {Modal && <Modal />}
    </BrowserRouter>
  );
});

export default App;
