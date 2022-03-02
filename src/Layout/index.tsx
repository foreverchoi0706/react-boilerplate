import React, { FC, ReactNode, Suspense, memo } from "react";
import { Navigate } from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import * as Styled from "./styled";

interface IProps {
  children: ReactNode;
  requrieAuth?: boolean;
  fill?: boolean;
  fallback?: NonNullable<ReactNode> | null;
}

const Layout: FC<IProps> = ({
  children,
  requrieAuth = false,
  fill = false,
  fallback = null,
}) => {
  const { isAuthed } = useSelector((root) => root.user);

  if (requrieAuth && !isAuthed) {
    return <Navigate to="/" />;
  }

  return (
    <Styled.Wrapper fill={fill}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </Styled.Wrapper>
  );
};

export default Layout;
