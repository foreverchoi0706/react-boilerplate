import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";

import Form from "@/component/molecule/Form";

const DEFAULT_VALUES = {
  id: "1",
  name: "",
  companyId: "",
  companyName: "",
  startAt: "",
  endAt: "",
  status: "",
};

const FormSearch: FC = () => {
  const handleSubmitForm = useCallback<SubmitHandler<typeof DEFAULT_VALUES>>(
    (test) => {
      console.log(test);
    },
    []
  );
  return (
    <Form.Provider
      defaultValues={DEFAULT_VALUES}
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
            <Form.Date />
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
            <Form.Select name="status">
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
