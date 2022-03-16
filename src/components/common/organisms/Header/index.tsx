import React, {memo} from "react";
import {Link} from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import * as S from "./styled";

const Header = () => {
    const {name} = useSelector((root) => root.user);

    console.log(name);

    return (
        <S.Header>
            <S.Gnb>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <h3>환영합니다, {name}님!</h3>
                </li>
            </S.Gnb>
        </S.Header>
    );
};

export default memo(Header);
