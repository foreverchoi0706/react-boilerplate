import { useCallback, useEffect, useState } from "react";
import logicController from "libs/logicController";

const useMedia = (maxWidth: number): boolean => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const handleResize = useCallback(() => {
    logicController.throttle(() => {
      if (innerWidth !== window.innerWidth) {
        setInnerWidth(window.innerWidth);
      }
    }, 200);
  }, [innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return innerWidth <= maxWidth;
};

export default useMedia;
