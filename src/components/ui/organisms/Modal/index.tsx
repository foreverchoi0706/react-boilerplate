import React, { FC, PropsWithChildren, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import PortalProvider from "@/components/PortalProvider";
import Styled from "./styled";

interface IProps {
    handleCloseModal : ()=>void
}

const Modal: FC<PropsWithChildren<IProps>> = ({children,handleCloseModal}) => {
    const isFirstRender = useRef<boolean>(true);

    const {pathname} = useLocation();

    useEffect(()=> {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        handleCloseModal();
    },[pathname]);

    return (
    <PortalProvider>
        <Styled.Modal onClick={handleCloseModal}>{children}</Styled.Modal>
    </PortalProvider>
    )
};

export default Modal;
