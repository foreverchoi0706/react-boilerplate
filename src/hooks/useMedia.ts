import { useCallback, useEffect, useState } from "react";
import logicController from "libs/logicController";

const useMedia = (maxWidth: number): boolean => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const handleResizeWindow = useCallback(() => {
    logicController.throttle(() => {
      if (innerWidth !== window.innerWidth) {
        setInnerWidth(window.innerWidth);
      }
    }, 200);
  }, [innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return innerWidth <= maxWidth;
};

export default useMedia;
