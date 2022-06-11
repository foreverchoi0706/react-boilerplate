import { FC, memo, PropsWithChildren, useEffect, useMemo } from "react";

const ErudaProvider: FC<PropsWithChildren<{}>> = memo(({ children }) => {
  const isMobile = useMemo(
    () => "ontouchstart" in document.documentElement,
    []
  );

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && isMobile) {
      const script = document.createElement("script");
      script.defer = true;
      script.src = "//cdn.jsdelivr.net/npm/eruda";
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        (window as any).eruda.init();
      });
    }
  }, [isMobile]);
  return <>{children}</>;
});

export default ErudaProvider;
