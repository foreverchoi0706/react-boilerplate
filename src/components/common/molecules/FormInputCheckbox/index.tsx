import React, {ChangeEventHandler, FC, memo, MouseEventHandler, ReactNode} from "react";
import Input from "@/components/common/atoms/Input";
import {useFormContext, Validate} from "react-hook-form";

interface IProps {
    name: string,
    label: ReactNode | string;
    checked: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputCheckbox: FC<IProps> = ({name, label, checked, onClick}, onChange) => {

    console.log("FormInputCheckbox");

    const {register, formState: {errors}} = useFormContext();

    return <div>
        <Input.Checkbox type="checkbox" onClick={onClick} onChange={onChange} {...register(name)}
        />
        <label>{label}</label>
    </div>;
};

export default memo(FormInputCheckbox);