import React, {FC,  useEffect,PropsWithChildren} from "react";
import {createPortal} from "react-dom";

const modal = document.querySelector("#modal");

const Portal: FC<PropsWithChildren<{}>> = ({children}) => {

    useEffect(()=> {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    },[]);

    return createPortal(<>{children}</>, modal);
};

export default Portal;
