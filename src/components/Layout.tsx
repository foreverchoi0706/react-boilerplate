import {Box, Button, Stack, useDisclosure} from "@chakra-ui/react";
import React, {FC, memo, PropsWithChildren} from "react";
import {Link} from "react-router-dom";

import ModalProvider from "@/components/ModalProvider";
import FormSignIn from "@/components/organisms/FormSignIn";
import * as Gnb from "@/components/organisms/Gnb";

const Main: FC<PropsWithChildren> = memo(({children}) => {
    console.log(children);
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <Stack backgroundColor="#e4e4e4" maxWidth="1060px">
            <Gnb.Wrap>
                <Gnb.Items>
                    <Gnb.Item><Link to="/">HOME</Link></Gnb.Item>
                </Gnb.Items>
                <Button onClick={() => onOpen()}>LOGIN</Button>
            </Gnb.Wrap>
            <Box>{children}</Box>
            <footer>
                asdas
            </footer>
            {isOpen && <ModalProvider isOpen={isOpen} onClose={onClose} title="SignIn">
                <FormSignIn/>
            </ModalProvider>}
        </Stack>
    )
});


const Logo: FC<PropsWithChildren> = memo(({children}) => {
    return <Box>
        {children}
    </Box>
});


export default Object.assign({
    Main,
    Logo
});