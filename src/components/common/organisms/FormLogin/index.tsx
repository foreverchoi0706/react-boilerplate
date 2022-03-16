import React, {FC} from "react";
import {FieldValues} from "react-hook-form";
import Form from "@/components/Form";
import FormInputText from "@/components/common/molecules/FormInputText";
import FormInputPassword from "@/components/common/molecules/FormInputPassword";
import FormInputRadio from "@/components/common/molecules/FormInputRadio";
import FormInputCheckbox from "@/components/common/molecules/FormInputCheckbox";
import Button from "@/components/common/atoms/Button";
import Styled from "./styled";

const FormLogin: FC = () => {
    const handleSubmit = (fieldValue: FieldValues) => {
        console.log(fieldValue);
    };

    return <Styled.Wrapper>
        <Form onSubmit={handleSubmit}>
            <FormInputText
                name="id"
                placeholder="id"
                required="id는 필수입니다."
            />
            <FormInputPassword name="pw" placeholder="pw"/>
            <FormInputRadio name="radio" value="on" text="test"/>
            <FormInputRadio name="radio" value="off" text="test2"/>
            <FormInputCheckbox name="checkbox" text="test2"/>
            <Button.Primary type="submit">SUBMIT</Button.Primary>
        </Form>
    </Styled.Wrapper>;
};

export default FormLogin;