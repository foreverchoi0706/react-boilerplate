import { FC, memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import cookieController from "libs/cookieController";
import Modal from "components/organisms/Modal";
import useMedia from "hooks/useMedia";
import useUiStore from "hooks/stores/useUiStore";
import useUserStore from "hooks/stores/useUserStore";
import Styled from "./styled";

const Gnb: FC = memo(() => {
  const [isLogin, setIsLogin] = useUserStore(
    ({ isLogin, setIsLogin }) => [isLogin, setIsLogin],
    shallow
  );

  const setIsLoginModalOpen = useUiStore(
    (state) => state.setIsLoginModalOpen,
    shallow
  );

  const handleLogin = useCallback(() => {
    setIsLoginModalOpen(true);
  }, [setIsLoginModalOpen]);

  const handleLogin2 = useCallback(() => {
    setIsLogin(false);
    cookieController.delete("isLogin");
  }, [setIsLogin]);

  return (
    <nav>
      <Link to="/">A</Link>
      <Link to="/">B</Link>
      <button onClick={isLogin ? handleLogin2 : handleLogin}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </nav>
  );
});

const Header: FC = memo(() => {
  const isMobile = useMedia(680);

  const [isGnbOpen, setIsGnbOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsGnbOpen((prevState) => !prevState);
  }, []);

  return (
    <Styled.Header>
      <Styled.LogoWrap>
        <Link to="/">LOGO</Link>
      </Styled.LogoWrap>
      <Styled.GnbWrap>
        {isMobile ? (
          <>
            <button onClick={handleClick}>GNB 열기</button>
            {isGnbOpen && (
              <Modal title="GNb" onClose={handleClick}>
                <Gnb />
              </Modal>
            )}
          </>
        ) : (
          <Gnb />
        )}
      </Styled.GnbWrap>
    </Styled.Header>
  );
});

export default Header;
