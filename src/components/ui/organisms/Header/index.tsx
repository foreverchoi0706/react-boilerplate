import { FC, memo } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import cookieController from "libs/cookieController";
import useUiStore from "hooks/stores/useUiStore";
import useUserStore from "hooks/stores/useUserStore";
import Styled from "./styled";

const Header: FC = memo(() => {
    const [isLogined, setIsLogined, userinfo] = useUserStore(({ isLogined, setIsLogined, userinfo }) => [isLogined, setIsLogined, userinfo], shallow);

    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    return (
        <Styled.Header>
            <Styled.LogoWrap>
                <Link to="/">
                    LOGO
                </Link>
            </Styled.LogoWrap>
            {isLogined ?
                <>
                    {userinfo.name}님 환영합니다.
                    <button onClick={() => {
                        setIsLogined(false);
                        cookieController.delete("isLogined");
                    }}>
                        로그아웃
                    </button>
                </>
                :
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