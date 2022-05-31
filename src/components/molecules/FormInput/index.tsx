import { FC, memo, useId } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    label: string;
    name: string;
    type: "text" | "password";
    placeholder?: string;
}

const FormInput: FC<IProps> =
    memo(({
        label,
        name,
        type,
        placeholder,
        ...rest
    }) => {
        const { register, formState: { errors } } = useFormContext();

        const id = useId();
        return (
            <Styled.FormInput>
                <Styled.Label htmlFor={id}>{rest.required && <em>*</em>} {label}</Styled.Label>
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, rest)}
                />
                {errors[name] && <Styled.ErrorMsg>{errors[name].message}</Styled.ErrorMsg>}
            </Styled.FormInput>
        );
    });

export default FormInput
