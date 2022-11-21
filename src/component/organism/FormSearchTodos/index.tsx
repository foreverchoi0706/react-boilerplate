import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from "@/component/molecule/Form";
import { INITIAL_FORM_SEARCH_TODOS } from "@/constant/search";
import useQueryString from "@/hook/useQueryString";
import { IFormSearchTodos } from "@/type/search";

const FormSearchUser: FC = () => {
  const navigate = useNavigate();
  const { stringify } = useQueryString<IFormSearchTodos>();
  const methods = useForm<IFormSearchTodos>({
    defaultValues: INITIAL_FORM_SEARCH_TODOS,
  });

  const handleResetForm = useCallback(() => {
    methods.reset(INITIAL_FORM_SEARCH_TODOS);
    navigate(`/todos`);
  }, []);

  const handleSubmitForm = useCallback<SubmitHandler<IFormSearchTodos>>(
    (formSearchUser) => {
      navigate(`/todos?${stringify(formSearchUser)}`);
    },
    []
  );

  return (
    <FormProvider {...methods}>
      <Form
        onReset={handleResetForm}
        onSubmit={methods.handleSubmit(handleSubmitForm)}
      >
        <Grid
          alignItems="flex-end"
          gridTemplateColumns="repeat(6,15%)"
          justifyContent="space-between"
        >
          <GridItem>
            <Form.Field name="userId">
              <Form.Label>아이디</Form.Label>
              <Form.InputNumber />
            </Form.Field>
          </GridItem>

          <GridItem>
            <Form.Field name="title">
              <Form.Label>타이틀</Form.Label>
              <Form.InputText />
            </Form.Field>
          </GridItem>

          <GridItem>
            <Flex gap="20px">
              <Button colorScheme="blue" flexGrow="1" type="submit">
                검색
              </Button>
              <Button flexGrow="1" type="reset">
                초기화
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default memo(FormSearchUser);
