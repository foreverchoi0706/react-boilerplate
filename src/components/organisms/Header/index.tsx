import { FC, memo } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import cookieController from "libs/cookieController";
import useMedia from "hooks/useMedia";
import useUiStore from "hooks/stores/useUiStore";
import useUserStore from "hooks/stores/useUserStore";
import Styled from "./styled";

const Header: FC = memo(() => {
    const isMobile = useMedia(600);

    console.log(isMobile);

    const [isLogin, setIsLogin, userinfo] = useUserStore(({ isLogin, setIsLogin, userinfo }) => [isLogin, setIsLogin, userinfo], shallow);

    const setIsLoginModalOpen = useUiStore((state) => state.setIsLoginModalOpen, shallow);

    return (
        <Styled.Header>
            <Styled.LogoWrap>
                <Link to="/">
                    LOGO
                </Link>
            </Styled.LogoWrap>
            <Styled.Gnb>
                <Link to="/">A</Link>
                <Link to="/">B</Link>
                {isLogin ?
                    <>
                        {userinfo.name}님 환영합니다.
                        <button onClick={() => {
                            setIsLogin(false);
                            cookieController.delete("isLogin");
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
            </Styled.Gnb>
        </Styled.Header>
    );
});

export default Header;