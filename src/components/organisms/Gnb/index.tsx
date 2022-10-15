import {Stack} from "@chakra-ui/react";
import React, {FC, PropsWithChildren} from "react";


export const Item: FC<PropsWithChildren> = ({children}) => {
    return <li>{children}</li>
}

export const Items: FC<PropsWithChildren> = ({children}) => {
    return <Stack alignItems="center" as="ul" direction="row" flexGrow={1} justifyContent="space-between"
                  listStyleType="none">{children}</Stack>
}

export const Wrap: FC<PropsWithChildren> = ({children}) => {
    return <Stack as="header" direction="row" gap="40px" padding="10px 20px">{children}</Stack>
}

export default null;