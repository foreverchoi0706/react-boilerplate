import { FC, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import useSign from "hooks/useSign";
import useMedia from "hooks/useMedia";
import useModal from "hooks/useModal";
import Modal from "components/organisms/Modal";
import ModalFormLogin from "components/organisms/ModalFormLogin";
import Styled from "./styled";

const Gnb: FC = memo(() => {
  const { isSignIn, signOut } = useSign();

  const { openModal } = useModal();

  const handleClickOpenLoginModal = useCallback(() => {
    openModal(<ModalFormLogin />);
  }, []);

  return (
    <nav>
      <Link to="/">A</Link>
      <Link to="/">B</Link>
      <button onClick={isSignIn ? signOut : handleClickOpenLoginModal}>
        {isSignIn ? "로그아웃" : "로그인"}
      </button>
    </nav>
  );
});

const Header: FC = memo(() => {
  const { openModal } = useModal();

  const isMobile = useMedia(680);

  const handleClick = useCallback(() => {
    openModal(
      <Modal title="GNb">
        <Gnb />
      </Modal>
    );
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
          </>
        ) : (
          <Gnb />
        )}
      </Styled.GnbWrap>
    </Styled.Header>
  );
});

export default Header;
