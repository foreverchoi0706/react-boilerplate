import {Button, Stack} from "@chakra-ui/react";
import React, {FC, memo, useCallback} from "react";
import {SubmitHandler} from "react-hook-form";

import * as Input from "@/components/molecules/Input";
import RHFProvider from "@/components/RHFProvider";

export interface ISigInForm {
    id: string;
    password: string
}

const FormSignIn: FC = () => {
    const handleSubmitForm = useCallback<SubmitHandler<ISigInForm>>((signInForm) => {
        console.log(signInForm);
    }, [])

    return <RHFProvider onSubmit={handleSubmitForm}>
        <Stack backgroundColor="#ffffff" gap="10px" padding={{
            base: "10px",
        }}>
            <Input.Wrap name="id">
                <Input.Label>ID</Input.Label>
                <Input.Text registerOptions={{
                    required: "필수입력입니다."
                }} type="text"/>
                <Input.Message/>
            </Input.Wrap>
            <Input.Wrap name="password">
                <Input.Label>PW</Input.Label>
                <Input.Text registerOptions={{
                    required: "필수입력입니다."
                }} type="password"/>
                <Input.Message/>
            </Input.Wrap>
            <Button type="submit">SUBMIT</Button>
        </Stack>
    </RHFProvider>
}

export default memo(FormSignIn);