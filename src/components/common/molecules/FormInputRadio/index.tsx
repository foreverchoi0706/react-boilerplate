import React, {FC, memo, ReactNode} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";
import Styled from "./styled";

interface IProps {
    name: string;
    value: string;
    text: ReactNode | string;
    defaultChecked?: boolean;
    tooltip?: ReactNode | string;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputRadio: FC<IProps> = ({name, value, text, defaultChecked}) => {

    const {watch, register, formState: {errors}} = useFormContext();

    const checked = watch()[name];
    return (
        <Styled.Label checked={value === checked}>
            <Input.Radio type="radio" value={value} {...register(name)}
                         defaultChecked={defaultChecked}/>
            {text}
        </Styled.Label>
    );
};

export default memo(FormInputRadio);