import { Box, Button, Flex, Stack, StackItem, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Form from "@/component/molecule/Form";
import { INITIAL_SIGN_IN_FORM } from "@/constant/account";
import useSignInMutation from "@/hook/queries/useSignInMutation";
import { ISignInForm } from "@/type/account";

const FormSignIn: FC = () => {
  const { isPending, mutate } = useSignInMutation();

  const methods = useForm<ISignInForm>({
    defaultValues: INITIAL_SIGN_IN_FORM,
  });

  const handleSubmitForm = useCallback<SubmitHandler<ISignInForm>>(
    (signInForm) => {
      mutate(signInForm);
    },
    []
  );

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <Stack>
          <StackItem>
            <Text as="h1">로그인</Text>
          </StackItem>
          <StackItem>
            <Form.Field name="id">
              <Form.Label>아이디</Form.Label>
              <Form.InputText disabled={isPending} required="필수입력입니다." />
              <Form.Message />
            </Form.Field>
          </StackItem>
          <StackItem>
            <Form.Field name="password">
              <Form.Label>패스워드</Form.Label>
              <Form.InputPassword
                disabled={isPending}
                required="필수입력입니다."
              />
              <Form.Message />
            </Form.Field>
          </StackItem>
          <StackItem>
            <Flex gap="10px">
              <Button disabled={isPending} flexGrow="1" type="submit">
                로그인
              </Button>
              <Box flexGrow="1">
                <Link to="/sign-up">
                  <Button disabled={isPending} type="button" width="100%">
                    회원가입
                  </Button>
                </Link>
              </Box>
            </Flex>
          </StackItem>
        </Stack>
      </Form>
    </FormProvider>
  );
};

export default memo(FormSignIn);
