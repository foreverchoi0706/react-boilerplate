import React, {FC, PropsWithChildren} from "react";
import Portal from "@/components/Portal";
import Styled from "./styled";

interface IProps {
    handleCloseModal : () => void
}

const Modal: FC<PropsWithChildren<IProps>> = ({children,handleCloseModal}) => {
    return (
    <Portal>
        <Styled.Modal onClick={handleCloseModal}>{children}</Styled.Modal>
    </Portal>
    )
};

export default Modal;
