import * as Input from "@/components/molecules/Input";
import RHFProvider from "@/components/RHFProvider";
import { Stack, Button } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";

export interface ISigInForm {
    id: string;
    password: string
}

const FormSignIn: FC = () => {
    const handleSubmitForm = useCallback<SubmitHandler<ISigInForm>>((signInForm) => {
        console.log(signInForm);
    }, [])

    return <RHFProvider onSubmit={handleSubmitForm}>
        <Stack backgroundColor="#ffffff" padding={{
            base: "10px",
        }} gap="10px">
            <Input.Wrap name="id">
                <Input.Label>ID</Input.Label>
                <Input.Text type="text" registerOptions={{
                    required: "필수입력입니다."
                }} />
                <Input.Message />
            </Input.Wrap>
            <Input.Wrap name="password">
                <Input.Label>PW</Input.Label>
                <Input.Text type="password" registerOptions={{
                    required: "필수입력입니다."
                }} />
                <Input.Message />
            </Input.Wrap>
            <Button type="submit">SUBMIT</Button>
        </Stack>
    </RHFProvider>
}

export default memo(FormSignIn);