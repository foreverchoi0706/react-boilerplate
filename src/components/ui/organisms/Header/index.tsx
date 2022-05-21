import { FC, memo } from "react";
import { Link } from "react-router-dom";
import useUiStore from "hooks/stores/useUiStore";
import Styled from "./styled";
import useUserStore from "hooks/stores/useUserStore";
import shallow from "zustand/shallow";

const Header: FC = memo(() => {
    const isLogined = useUserStore((state) => state.isLogined, shallow);

    console.log(isLogined);

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
                }}>로그인/회원가입</button>
            }
        </Styled.Header>
    );
});

export default Header;