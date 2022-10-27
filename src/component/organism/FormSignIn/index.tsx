import {
  Box,
  Button,
  Center,
  Flex,
  Spinner,
  Stack,
  StackItem,
} from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { UseFormReturn } from "react-hook-form/dist/types";

import Form from "@/component/molecule/Form";
import useSignInMutation from "@/hook/queries/useSignInMutation";
import { INITIAL_HISTORY, ISigInForm } from "@/type/account";

const FormSignInContents: FC<UseFormReturn<ISigInForm>> = ({
  handleSubmit,
}) => {
  const { isLoading } = useSignInMutation();

  const { fields, append, remove } = useFieldArray<ISigInForm>({
    name: "histories",
  });

  const handleClickRemoveItem = useCallback((index: number) => {
    remove(index);
  }, []);

  const handleClickAddItem = useCallback(() => {
    append(INITIAL_HISTORY);
  }, []);

  const handleSubmitForm = useCallback<SubmitHandler<ISigInForm>>(
    (signInForm) => {
      console.log(signInForm);
    },
    []
  );

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Stack backgroundColor="#ffffff" gap="10px" padding="10px">
        <StackItem>
          <Form name="id">
            <Form.Label>ID</Form.Label>
            <Form.InputText required="필수입력입니다." />
            <Form.Message />
          </Form>
        </StackItem>

        <StackItem>
          <Form name="password">
            <Form.Label>PW</Form.Label>
            <Form.InputPassword required="필수입력입니다." />
            <Form.Message />
          </Form>
        </StackItem>

        <StackItem>
          <Form name="date">
            <Form.Label>DATE</Form.Label>
            <Form.Date />
            <Form.Message />
          </Form>
        </StackItem>

        <StackItem>
          <Flex flexDirection="row" gap="10px">
            <Form name="M">
              <Form.Label>남자</Form.Label>
              <Form.Checkbox />
            </Form>
            <Form name="W">
              <Form.Label>여자</Form.Label>
              <Form.Checkbox />
            </Form>
          </Flex>
        </StackItem>

        {fields.map((history, index) => (
          <StackItem key={history.id}>
            <Flex alignItems="center" gap="10px">
              <Box flexGrow={1}>
                <Form name={`histories.${index}.title`}>
                  <Flex justifyContent="space-between">
                    <Form.Label>HISTORY {index + 1}</Form.Label>{" "}
                    <Button onClick={() => handleClickRemoveItem(index)}>
                      X
                    </Button>
                  </Flex>
                  <Form.InputText />
                  <Form.Message />
                </Form>
                <Form name={`histories.${index}.contents`}>
                  <Form.InputText />
                  <Form.Message />
                </Form>
              </Box>
            </Flex>
          </StackItem>
        ))}

        <StackItem>
          <Button onClick={handleClickAddItem} type="button">
            +
          </Button>
        </StackItem>
        <StackItem>
          <Button type="submit" width="100%">
            SUBMIT
          </Button>
        </StackItem>
      </Stack>
    </form>
  );
};

const FormSignIn: FC = () => {
  const methods = useForm<ISigInForm>({
    defaultValues: {
      id: "test",
      password: "test",
      date: new Date().toISOString().slice(0, 10),
      histories: [INITIAL_HISTORY],
    },
  });

  return (
    <FormProvider {...methods}>
      <FormSignInContents {...methods} />
    </FormProvider>
  );
};

export default memo(FormSignIn);
