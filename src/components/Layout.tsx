import React, { FC, ReactNode, Suspense, PropsWithChildren } from "react";

interface IProps {
    fallback?: NonNullable<ReactNode> | null;
}

const Layout: FC<PropsWithChildren<IProps>> = ({ children, fallback = null }) => {
    return (<Suspense fallback={fallback}>{children}</Suspense>);
};

export default Layout;
