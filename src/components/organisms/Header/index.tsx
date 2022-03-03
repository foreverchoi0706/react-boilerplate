import React, { memo } from "react";
import { Link } from "react-router-dom";
import useDispatch from "@/hooks/useDispatch";
import useSelector from "@/hooks/useSelector";
import { changeUserName } from "@/reducers/user";
import * as S from "./styled";

const Header = () => {
  console.log("HEADER");

  const { name } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  return (
    <S.Header>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <button
          onClick={() => {
            dispatch(changeUserName("KIM"));
          }}
        >
          TEST
        </button>
        <h3>환영합니다 {name}님!</h3>
      </ul>
    </S.Header>
  );
};

export default memo(Header);
