import React, {FC, ReactNode} from "react";
import {createPortal} from "react-dom";
import Styled from "./styled";

interface IProps {
    children: ReactNode;
}

const modal = document.querySelector("#modal");

const Modal: FC<IProps> = ({children}) => {
    return createPortal(<Styled.Wrapper>{children}</Styled.Wrapper>, modal);
};

export default Modal;
