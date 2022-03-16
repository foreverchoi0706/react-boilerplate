import React, {ChangeEventHandler, FC, memo, MouseEventHandler} from "react";
import {useFormContext, Validate} from "react-hook-form";
import Input from "@/components/common/atoms/Input";
import Styled from "./styled";

interface IProps {
    name: string;
    placeholder?: string;
    required?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    validate?: Validate<any> | Record<string, Validate<any>>;
}

const FormInputPassword: FC<IProps> = ({
                                           name,
                                           placeholder,
                                           validate,
                                           required,
                                       }) => {
    const {
        register,
        formState: {errors},
    } = useFormContext();

    return (
        <Styled.Label>
            <Input.Password
                placeholder={placeholder}
                type="password"
                {...register(name, {
                    validate: {
                        ...validate,
                        required: (value: string) => {
                            return value ? true : required;
                        },
                    },
                })}
            />
            {errors[name] && <em>errors[name].message</em>}
        </Styled.Label>
    );
};

export default memo(FormInputPassword);
