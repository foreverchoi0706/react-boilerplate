import React, {FC} from "react";
import {FieldValues} from "react-hook-form";
import Form from "@/components/Form";
import FormInputText from "@/components/common/molecules/FormInputText";
import FormInputRadio from "@/components/common/molecules/FormInputRadio";
import FormInputCheckbox from "@/components/common/molecules/FormInputCheckbox";
import Button from "@/components/common/atoms/Button";
import Styled from "./styled";

const defaultValues: FieldValues = {
    id: "",
    pw: "",
    checkbox: true,
    radio: "off"
};

const FormLogin: FC = () => {
    const handleSubmit = (fieldValue: FieldValues) => {
        console.log(fieldValue);
    };

    return <Styled.Wrapper>
        <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
            <FormInputText
                name="id"
                type="text"
                placeholder="ID를 입력해주세요."
                required="ID를 입력해주세요."
            />
            <FormInputText name="pw" type="password" placeholder="pw" required="PW를 입력해주세요."/>
            <Styled.RadioWrapper>
                <FormInputRadio name="radio" value="on" text="test"/>
                <FormInputRadio name="radio" value="off" text="test2"/>
            </Styled.RadioWrapper>
            <Styled.RadioWrapper>
                <FormInputCheckbox name="checkbox1" text="checkbox1"/>
                <FormInputCheckbox name="checkbox2" text="checkbox2"/>
            </Styled.RadioWrapper>
            <Button.Primary type="submit">SUBMIT</Button.Primary>
        </Form>
    </Styled.Wrapper>;
};

export default FormLogin;