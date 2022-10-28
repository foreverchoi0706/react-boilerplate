import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";

import Form from "@/component/molecule/Form";

const FormSearch: FC = () => {
  const handleSubmitForm = useCallback<SubmitHandler<any>>((test) => {
    console.log(test);
  }, []);
  return (
    <Form.Provider defaultValues={{}} onSubmitForm={handleSubmitForm}>
      <Grid
        alignItems="flex-end"
        gridTemplateColumns="repeat(4,24%)"
        justifyContent="space-between"
      >
        <GridItem>
          <Form.Field name="test">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test2">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test3">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test4">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test5">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test6">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Form.Field name="test7">
            <Form.Label>dsad</Form.Label>
            <Form.InputText />
          </Form.Field>
        </GridItem>
        <GridItem>
          <Flex gap="20px">
            <Button flexGrow="1" type="submit">
              검색
            </Button>
            <Button flexGrow="1">초기화</Button>
          </Flex>
        </GridItem>
      </Grid>
    </Form.Provider>
  );
};

export default FormSearch;
