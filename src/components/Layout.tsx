import {Box, Button, Center, useDisclosure} from "@chakra-ui/react";
import React, {FC, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import shallow from "zustand/shallow";

import ModalProvider from "@/components/ModalProvider";
import FormSignIn from "@/components/organisms/FormSignIn";
import * as Gnb from "@/components/organisms/Gnb";
import useUserStore from "@/hooks/useUserStore";

const Main: FC<PropsWithChildren> = ({children}) => {
    const {isSignIn, setIsSignIn} = useUserStore(state => state, shallow);
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <Center>
            <Box backgroundColor="#ffffff" maxWidth="1060px" paddingX="10px" width="100%">
                <Gnb.Wrap userName="AAA">
                    <Gnb.Items>
                        <Gnb.Item><Link to="/">HOME</Link></Gnb.Item>
                    </Gnb.Items>
                    {isSignIn ?
                        <Button onClick={() => setIsSignIn(false)}>Sign Out</Button> :
                        <Button onClick={onOpen}>Sign In</Button>
                    }
                </Gnb.Wrap>

                <Box backgroundColor="#ffffff" maxWidth="1060px">{children}</Box>

                <footer>
                    FOOTER
                </footer>
                {isOpen && <ModalProvider isOpen={isOpen} onClose={onClose} title="SignIn">
                    <FormSignIn/>
                </ModalProvider>}
            </Box>
        </Center>
    )
};


const Logo: FC<PropsWithChildren> = ({children}) => {
    return <Box>
        {children}
    </Box>
};


export default Object.assign({
    Main,
    Logo
});