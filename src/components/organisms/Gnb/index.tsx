import { Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";


export const Item: FC<PropsWithChildren> = ({ children }) => {
    return <li>{children}</li>
}

export const Items: FC<PropsWithChildren> = ({ children }) => {
    return <Stack as="ul" listStyleType="none" direction="row" justifyContent="space-between" alignItems="center" flexGrow={1}>{children}</Stack>
}

export const Wrap: FC<PropsWithChildren> = ({ children }) => {
    return <Stack as="header" direction="row" gap="40px" padding="10px 20px" >{children}</Stack>
}

export default null;