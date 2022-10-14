import { FC, memo, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, useDisclosure } from "@chakra-ui/react";
import ModalProvider from "@/components/ModalProvider";
import * as Gnb from "@/components/organisms/Gnb";
import FormSignIn from "@/components/organisms/FormSignIn";

export interface ISigInForm {
    id: string;
    password: string
}

const Main: FC<PropsWithChildren> = memo(({ children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();



    return (
        <Stack backgroundColor="#e4e4e4" maxWidth="1060px">
            <Gnb.Wrap >
                <Gnb.Items>
                    <Gnb.Item><Link to="/">HOME</Link></Gnb.Item>
                </Gnb.Items>
                <Button onClick={() => onOpen()}>LOGIN</Button>
            </Gnb.Wrap>
            {children}
            <footer>
                asdas
            </footer>
            {isOpen && <ModalProvider title="SignIn" isOpen={isOpen} onClose={onClose}>
                <FormSignIn />
            </ModalProvider>}
        </Stack >
    )
});


const Logo: FC<PropsWithChildren> = memo(({ children }) => {
    return <Box>
        {children}
    </Box>
});


export default Object.assign({
    Main,
    Logo
});