import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import * as S from "./styled";

interface IProps {
  children: ReactNode;
}

const modal = document.querySelector("#modal");

const Modal: FC<IProps> = ({ children }) => {
  return createPortal(<S.Wrapper>{children}</S.Wrapper>, modal);
};

export default Modal;
