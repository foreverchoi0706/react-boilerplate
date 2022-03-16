import React, {ChangeEventHandler, FC, memo, MouseEventHandler, ReactNode} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";

interface IProps {
    name: string;
    value: string;
    label: ReactNode | string;
    tooltip?: ReactNode | string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputRadio: FC<IProps> = ({name, value, label}) => {

    console.log("FormInputRadio");

    const {register, formState: {errors}} = useFormContext();

    return <div>
        <Input.Radio type="radio" value={value}  {...register(name)}/>
        <label>{label}</label>
    </div>;
};

export default memo(FormInputRadio);