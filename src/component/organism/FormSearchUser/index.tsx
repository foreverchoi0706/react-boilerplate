import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from "@/component/molecule/Form";
import { INITIAL_FORM_SEARCH_USER } from "@/constant/search";
import useQueryString from "@/hook/useQueryString";
import useSearchForm from "@/hook/useSearchForm";
import { IFormSearchUser } from "@/type/search";

const FormSearch: FC = () => {
  const navigate = useNavigate();
  const searchForm = useSearchForm<IFormSearchUser>();
  const { parse } = useQueryString<IFormSearchUser>(searchForm);

  const handleSubmitForm = useCallback<SubmitHandler<IFormSearchUser>>(
    (formSearchUser) => navigate(`/user?${parse(formSearchUser)}`),
    []
  );

  return (
    <Form
      defaultValues={INITIAL_FORM_SEARCH_USER}
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
              <Form.Option value="">전체</Form.Option>
              <Form.Option value="AAA">AAA</Form.Option>
              <Form.Option value="BBB">BBB</Form.Option>
              <Form.Option value="CCC">CCC</Form.Option>
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
    </Form>
  );
};

export default memo(FormSearch);
