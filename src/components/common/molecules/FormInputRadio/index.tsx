import React, {FC, memo, ReactNode} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";
import Styled from "./styled";

interface IProps {
    name: string;
    value: string;
    text: ReactNode | string;
    tooltip?: ReactNode | string;
    validate?: Validate<string | boolean> | Record<string, Validate<string | boolean>>;
}

const FormInputRadio: FC<IProps> = ({name, value, text}) => {

    const {watch, register} = useFormContext();

    const checked = watch()[name];

    return (
        <Styled.Label checked={value === checked}>
            <Input.Radio type="radio" value={value} {...register(name)}
            />
            <Styled.Span>{text}</Styled.Span>
        </Styled.Label>
    );
};

export default memo(FormInputRadio);