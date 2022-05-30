import { useCallback, useEffect, useState } from "react";
import logicController from "libs/logicController";

const useMedia = (maxWidth: number): boolean => {
    const [state, setState] = useState<number>(window.innerWidth);

    const handleResize = useCallback(() => {
        logicController.throttle(() => {
            if (state !== window.innerWidth) {
                setState(window.innerWidth);
                console.log("setState");

            }


        }, 1000);
    }, []);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

    return state < maxWidth;
}

export default useMedia;