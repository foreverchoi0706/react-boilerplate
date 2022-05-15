import React, { FC, memo, ReactNode } from "react";
import Input from "@/components/ui/atoms/Input";
import { useFormContext, Validate } from "react-hook-form";
import Styled from "./styled";

interface IProps {
    name: string,
    text: ReactNode | string;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputCheckbox: FC<IProps> = ({ name, text }) => {

    const { watch, register, formState: { errors } } = useFormContext();

    const checked = watch()[name];

    return <Styled.Label checked={checked}>
        <Input.Checkbox type="checkbox"  {...register(name)} />
        <Styled.Span>{text}</Styled.Span>
        {errors[name] && <em>{errors[name].message}</em>}
    </Styled.Label>;
}
    ;

export default memo(FormInputCheckbox);