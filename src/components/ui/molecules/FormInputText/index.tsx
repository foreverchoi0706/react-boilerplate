import React, { FC, memo } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "@/components/ui/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    name: string;
    type: "text" | "password";
    placeholder: string;
}

const FormInputText: FC<IProps> =
    ({
        name,
        type,
        placeholder,
        ...validate
    }) => {
        const { register, formState: { errors } } = useFormContext();

        return (
            <Styled.Label>
                <span>아이디</span>
                <Input.Text
                    placeholder={placeholder}
                    type={type}
                    {...register(name, validate)}
                />
                {errors[name] && <Styled.Em>{errors[name].message}</Styled.Em>}
            </Styled.Label>
        );
    };

export default memo(FormInputText);
