import { FC, memo, useEffect, PropsWithChildren, useCallback } from "react";
import { createPortal } from "react-dom";
import Styled from "./styled";

interface IProps {
    title: string;
    onClose: () => void;
    disabledCloseButton?: boolean;
    heightFull?: boolean
}

const modal = document.querySelector("#modal") as Element;

const Modal: FC<PropsWithChildren<IProps>> = memo(({ children, title, onClose, disabledCloseButton = false, heightFull = true }) => {
    const handleKeyDown = useCallback(({ key }: KeyboardEvent) => {
        if (key === "Escape") {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            document.body.removeEventListener("keydown", handleKeyDown);
        }
    }, [handleKeyDown]);

    return createPortal(<Styled.Modal >
        <Styled.ModalContents heightFull={heightFull}>
            <Styled.ModalHeader >
                {title}
                {disabledCloseButton && <Styled.ModalCloseButton onClick={onClose} >X</Styled.ModalCloseButton>}
            </Styled.ModalHeader>
            <main>
                {children}
            </main>
        </Styled.ModalContents>
    </Styled.Modal >, modal);
});

export default Modal;


