import { Button, Flex, Stack, StackItem, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

import Form from "@/component/molecule/Form";
import useSignInMutation from "@/hook/queries/useSignInMutation";
import { ISignUpForm } from "@/type/account";

const FormSignUp: FC = () => {
  const { isLoading } = useSignInMutation();

  const handleSubmitForm = useCallback<SubmitHandler<ISignUpForm>>(
    (signInForm) => {
      console.log(signInForm);
    },
    []
  );

  return (
    <Form.Provider defaultValues={{}} onSubmitForm={handleSubmitForm}>
      <Stack>
        <StackItem>
          <Text as="h1">회원가입</Text>
        </StackItem>

        <StackItem>
          <Form.Field name="id">
            <Form.Label>아이디</Form.Label>
            <Form.InputText disabled={isLoading} required="필수입력입니다." />
            <Form.Message />
          </Form.Field>
        </StackItem>

        <StackItem>
          <Form.Field name="password">
            <Form.Label>패스워드</Form.Label>
            <Form.InputPassword
              disabled={isLoading}
              required="필수입력입니다."
            />
            <Form.Message />
          </Form.Field>
        </StackItem>

        <StackItem>
          <Form.Field name="password">
            <Form.Label>패스워드 확인</Form.Label>
            <Form.InputPassword
              disabled={isLoading}
              required="필수입력입니다."
            />
            <Form.Message />
          </Form.Field>
        </StackItem>

        <StackItem>
          <Flex gap="10px">
            <Button disabled={isLoading} flexGrow="1" type="submit">
              로그인
            </Button>
            <Button disabled={isLoading} flexGrow="1" type="button">
              <Link to="/sign-in">로그인 화면으로</Link>
            </Button>
          </Flex>
        </StackItem>
      </Stack>
    </Form.Provider>
  );
};

export default memo(FormSignUp);
