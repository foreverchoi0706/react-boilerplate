import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";

import Form from "@/component/molecule/Form";
import { INITIAL_FORM_SEARCH, TFormSearch } from "@/type/account";

const FormSearch: FC = () => {
  const handleSubmitForm = useCallback<SubmitHandler<TFormSearch>>((test) => {
    console.log(test);
  }, []);
  return (
    <Form.Provider
      defaultValues={INITIAL_FORM_SEARCH}
      onSubmitForm={handleSubmitForm}
    >
      <Grid
        alignItems="flex-end"
        gridTemplateColumns="repeat(4,24%)"
        justifyContent="space-between"
      >
        <GridItem>
          <Form.Field name="id">
            <Form.Label>아이디</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="name">
            <Form.Label>이름</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="companyId">
            <Form.Label>회사아이디</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="companyName">
            <Form.Label>회사명</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="startAt">
            <Form.Label>시작일</Form.Label>
            <Form.Date />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="endAt">
            <Form.Label>종료일</Form.Label>
            <Form.Date />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="status">
            <Form.Label>상태</Form.Label>
            <Form.Select>
              <Form.Option>AAA</Form.Option>
              <Form.Option>BBB</Form.Option>
              <Form.Option>CCC</Form.Option>
            </Form.Select>
          </Form.Field>
        </GridItem>
        <GridItem>
          <Flex gap="20px">
            <Button flexGrow="1" type="submit">
              검색
            </Button>
            <Button flexGrow="1" type="reset">
              초기화
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Form.Provider>
  );
};

export default FormSearch;
