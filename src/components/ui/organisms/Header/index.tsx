import { FC, memo } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import useUiStore from "hooks/stores/useUiStore";
import useUserStore from "hooks/stores/useUserStore";
import Styled from "./styled";
import { delCookie } from "libs/cookieController";

const Header: FC = memo(() => {
    const [isLogined, setIsLogined] = useUserStore(({ isLogined, setIsLogined }) => [isLogined, setIsLogined], shallow);

    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    return (
        <Styled.Header>
            <Styled.LogoWrap>
                <Link to="/">
                    LOGO
                </Link>
            </Styled.LogoWrap>
            {isLogined ?
                <button onClick={() => {
                    setIsLogined(false);
                    delCookie("isLogined");
                }}>
                    로그아웃
                </button> :
                <button onClick={() => {
                    setIsLoginModalOpen(true);
                }}>
                    로그인
                </button>
            }
        </Styled.Header>
    );
});

export default Header;