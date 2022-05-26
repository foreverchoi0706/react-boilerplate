import { FC, useEffect, PropsWithChildren, useCallback } from "react";
import { createPortal } from "react-dom";

interface IProps {
    handleClose: () => void
}

const Modal: FC<PropsWithChildren<IProps>> = ({ children, handleClose }) => {

    const modal = document.querySelector("#modal") as Element;

    console.log(modal);


    const handleKeyDown = useCallback(({ key }: KeyboardEvent) => {
        if (key === "Escape") {
            handleClose();
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            document.body.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    return createPortal(<div style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.6)",
    }} > {children}</div >, modal);
};

export default Modal;


