import {Button, Center, Flex, Spinner, Stack, StackItem} from "@chakra-ui/react";
import React, {FC, memo, useCallback, useState} from "react";
import {FormProvider, SubmitHandler, useFieldArray, useForm} from "react-hook-form";

import {signIn} from "@/apis";
import * as From from "@/components/molecules/Form";
import useUserStore from "@/hooks/useUserStore";

const INITIAL_HISTORY = {title: "", contents: ""};

export interface ISigInForm {
    id: string;
    password: string
    date: string
    histories: typeof INITIAL_HISTORY[]
}

const Temp: FC = () => {
    const {fields, append, remove} = useFieldArray<ISigInForm>({
        name: "histories"
    });

    const handleClickRemoveItem = useCallback((index: number) => {
        remove(index);
    }, []);

    const handleClickAddItem = useCallback(() => {
        append(INITIAL_HISTORY);
    }, []);

    return <>
        {fields.map((history, index) =>
            <StackItem key={history.id}>
                <From.Wrap name={`histories.${index}.value`}>
                    <From.Label>ID</From.Label>
                    <Flex gap="10px">
                        <From.InputText required="필수입력입니다."/>
                        <From.Button onClick={() => handleClickRemoveItem(index)} type="button">X</From.Button>
                    </Flex>
                    <From.Message/>
                </From.Wrap>
            </StackItem>
        )}
        <StackItem>
            <Button onClick={handleClickAddItem} type="button">+</Button>
        </StackItem>
    </>
}

const FormSignIn: FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const setIsSignIn = useUserStore((state) => state.setIsSignIn);

    const methods = useForm<ISigInForm>({
        defaultValues: {
            id: "test",
            password: "test",
            date: Intl.DateTimeFormat("ko").format(new Date()),
            histories: [{
                title: "",
                contents: ""
            }]
        }
    });


    const handleSubmitForm = useCallback<SubmitHandler<ISigInForm>>(async (signInForm) => {
        console.log(signInForm);
        return;
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

    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
            <Stack backgroundColor="#ffffff" gap="10px" padding="10px">
                <StackItem>
                    <From.Wrap name="id">
                        <From.Label>ID</From.Label>
                        <From.InputText required="필수입력입니다."/>
                        <From.Message/>
                    </From.Wrap>
                </StackItem>
                <StackItem>
                    <From.Wrap name="password">
                        <From.Label>PW</From.Label>
                        <From.InputPassword required="필수입력입니다."/>
                        <From.Message/>
                    </From.Wrap>
                </StackItem>
                <StackItem>
                    <From.Wrap name="date">
                        <From.Label>DATE</From.Label>
                        <From.Date/>
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
                <Temp/>
                <StackItem>
                    <Button type="submit" width="100%">SUBMIT</Button>
                </StackItem>
            </Stack>
        </form>
    </FormProvider>
}


export default memo(FormSignIn);