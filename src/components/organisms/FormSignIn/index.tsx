import {Button, Center, Flex, Spinner, Stack, StackItem} from "@chakra-ui/react";
import React, {FC, memo, useCallback, useState} from "react";
import {SubmitHandler} from "react-hook-form";

import * as From from "@/components/molecules/Form";
import RHFProvider from "@/components/RHFProvider";
import useUserStore from "@/hooks/useUserStore";

export interface ISigInForm {
    id: string;
    password: string
}

const FormSignIn: FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const setIsSignIn = useUserStore((state) => state.setIsSignIn);

    const handleSubmitForm = useCallback<SubmitHandler<ISigInForm>>(async (signInForm) => {
        setLoading(true);
        await signIn(signInForm).then((signInForm) => {
            console.log(signInForm);
            setIsSignIn(true);
        }).catch(() => {
            alert("fail singIn");
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (isLoading) return <Center><Spinner/></Center>;

    return <RHFProvider onSubmit={handleSubmitForm}>
        <Stack backgroundColor="#ffffff" gap="10px" padding="10px">
            <StackItem>
                <From.Wrap name="id">
                    <From.Label>ID</From.Label>
                    <From.Input required="필수입력입니다."/>
                    <From.Message/>
                </From.Wrap>
            </StackItem>
            <StackItem>
                <From.Wrap name="password">
                    <From.Label>PW</From.Label>
                    <From.Input required="필수입력입니다."/>
                    <From.Message/>
                </From.Wrap>
            </StackItem>
            <StackItem>
                <Flex flexDirection="row" gap="10px">
                    <From.Wrap name="M">
                        <From.Label>남자</From.Label>
                        <From.Checkbox/>
                    </From.Wrap>
                    <From.Wrap name="W">
                        <From.Label>여자</From.Label>
                        <From.Checkbox/>
                    </From.Wrap>
                </Flex>
            </StackItem>
            <StackItem>
                <Button type="submit" width="100%">SUBMIT</Button>
            </StackItem>
        </Stack>
    </RHFProvider>
}

export default memo(FormSignIn);