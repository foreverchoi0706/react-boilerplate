import React, { FC } from "react";
import { FieldValues } from "react-hook-form";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Button from "@/components/common/atoms/Button";
import FormInput from "@/components/common/molecules/FormInput";

const Temp: FC = () => {
  const handleSubmit = (fieldValue: FieldValues) => {
    console.log(fieldValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="id"
        type="text"
        placeholder="id"
        required="id는 필수입니다."
      />
      <FormInput name="pw" type="password" placeholder="pw" />
      <Button.Primary type="submit">SUBMIT</Button.Primary>
    </Form>
  );
};

const Home: FC = () => {
  return (
    <Layout fallback={<div>LOADING...</div>}>
      <Temp />
    </Layout>
  );
};

export default Home;
