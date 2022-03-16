import React, {FC} from "react";
import {FieldValues} from "react-hook-form";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Button from "@/components/common/atoms/Button";
import FormInputText from "@/components/common/molecules/FormInputText";
import FormInputPassword from "@/components/common/molecules/FormInputPassword";
import FormInputRadio from "@/components/common/molecules/FormInputRadio";
import FormInputCheckbox from "@/components/common/molecules/FormInputCheckbox";

const Temp: FC = () => {
    const handleSubmit = (fieldValue: FieldValues) => {
        console.log(fieldValue);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <FormInputText
                name="id"
                placeholder="id"
                required="id는 필수입니다."
            />
            <FormInputPassword name="pw" placeholder="pw"/>
            <FormInputRadio name="TEST" value="true" label="test"/>
            <FormInputRadio name="TEST" value="false" label="test2"/>
            <FormInputCheckbox name="test" checked label="test2"/>
            <Button.Primary type="submit">SUBMIT</Button.Primary>
        </Form>
    );
};

const Home: FC = () => {
    return (
        <Layout fallback={<div>LOADING...</div>}>
            <Temp/>
        </Layout>
    );
};

export default Home;
