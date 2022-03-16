import React, {ChangeEventHandler, FC, memo, MouseEventHandler} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";

interface IProps {
    name: string;
    placeholder?: string;
    required?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputText: FC<IProps> =
    ({
         name,
         placeholder,
         validate,
         required,
     }) => {
        const {register, formState: {errors}} = useFormContext();


        console.log("FormInputText");

        return (
            <div>
                <Input.Text
                    placeholder={placeholder}
                    type="text"
                    {...register(name, {
                        validate: {
                            ...validate,
                            required: (value: string) => {
                                return value ? true : required;
                            },
                        },
                    })}
                />
                <span>{errors[name] && errors[name].message}</span>
            </div>
        );
    };

export default memo(FormInputText);
