import {Flex, Stack, StackItem} from "@chakra-ui/react";
import React, {createContext, FC, PropsWithChildren} from "react";

interface IContext {
    userName: string | null;
}

const Context = createContext<IContext>({
    userName: null
});

export const Item: FC<PropsWithChildren> = ({children}) => {
    return <StackItem as="li">{children}</StackItem>
}

export const Items: FC<PropsWithChildren> = ({children}) => {
    return <Stack alignItems="center" as="ul" direction="row" flexGrow="1" justifyContent="space-between"
                  listStyleType="none">{children}</Stack>
}

export const Wrap: FC<PropsWithChildren<IContext>> = ({children, ...rest}) => {
    return <Context.Provider value={rest}>
        <Flex as="header" backgroundColor="#ffffff" gap="40px"
              left="0" padding="10px 20px" position="sticky" top="0"
              zIndex="999">{children}</Flex>
    </Context.Provider>
}

export default null;