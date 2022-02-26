import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import * as Styled from "@/Layout/styled";

interface IProps {
  children: ReactNode;
  requrieAuth?: boolean;
}

const Main: FC<IProps> = ({ children, requrieAuth }) => {
  const { isAuthed } = useSelector((root) => root.user);

  if (requrieAuth && !isAuthed) {
    return <Navigate to="/" />;
  }

  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Main;
