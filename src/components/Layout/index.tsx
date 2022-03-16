import React, {FC, ReactNode, Suspense} from "react";
import {Navigate} from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import * as S from "./styled";

interface IProps {
  children: ReactNode;
  fallback?: NonNullable<ReactNode> | null;
  securited?: boolean;
  filled?: boolean;
}

const Layout: FC<IProps> = ({
  children,
  fallback = null,
  securited = false,
  filled = false,
}) => {
  const { isAuthed } = useSelector((root) => root.user);

  if (securited && !isAuthed) {
    return <Navigate to="/" />;
  }

  return (
    <S.Wrapper isFilled={filled}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </S.Wrapper>
  );
};

export default Layout;
