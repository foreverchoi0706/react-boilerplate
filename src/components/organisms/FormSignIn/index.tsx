import {Button, Center, Spinner, Stack, StackItem} from "@chakra-ui/react";
import React, {FC, memo, useCallback, useState} from "react";
import {SubmitHandler} from "react-hook-form";

import {signIn} from "@/apis";
import * as Input from "@/components/molecules/Input";
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
                <Input.Wrap name="id">
                    <Input.Label>ID</Input.Label>
                    <Input.Text registerOptions={{
                        required: "필수입력입니다."
                    }} type="text"/>
                    <Input.Message/>
                </Input.Wrap>
            </StackItem>
            <StackItem>
                <Input.Wrap name="password">
                    <Input.Label>PW</Input.Label>
                    <Input.Text registerOptions={{
                        required: "필수입력입니다."
                    }} type="password"/>
                    <Input.Message/>
                </Input.Wrap>
            </StackItem>
            <StackItem>
                <Button type="submit" width="100%">SUBMIT</Button>
            </StackItem>
        </Stack>
    </RHFProvider>
}

export default memo(FormSignIn);