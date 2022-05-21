import { FC, memo } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import useUserStore from "hooks/stores/useUserStore";
import Styled from "./styled";

const Header: FC = memo(() => {
    const isLogined = useUserStore((state) => state.isLogined, shallow);

    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    return (
        <Styled.Header>
            <Styled.LogoWrap>
                <Link to="/">
                    LOGO
                </Link>
            </Styled.LogoWrap>
            {isLogined ?
                "환영합니다" :
                <button onClick={() => {
                    setIsLoginModalOpen(true);
                }}>
                    로그인/회원가입
                </button>
            }
        </Styled.Header>
    );
});

export default Header;