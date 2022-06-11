import {FC, memo, PropsWithChildren, useEffect} from "react";

const ErudaProvider : FC<PropsWithChildren<{}>> = memo(({children}) => {
    useEffect(()=> {
        if(process.env.NODE_ENV === "development"){
            const script = document.createElement("script");
            script.defer = true;
            script.src = "//cdn.jsdelivr.net/npm/eruda";
            document.body.appendChild(script);
            script.addEventListener("load",()=> {
                (window as  any).eruda.init();
            });
        }
    },[]);
    return <>{children}</>
});

export default  ErudaProvider;