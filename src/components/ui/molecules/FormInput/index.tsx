import { FC, memo } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/ui/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    label?: string;
    name: string;
    type: "text" | "password";
    placeholder: string;
    full?: boolean
}

const FormInput: FC<IProps> =
    ({
        label,
        name,
        type,
        full = false,
        placeholder,
        ...rest
    }) => {
        const { register, formState: { errors } } = useFormContext();

        return (
            <Styled.FormInput>
                <Styled.Label htmlFor={name}>{rest.required && <em>*</em>} {label}</Styled.Label>
                <Input
                    placeholder={placeholder}
                    type={type}
                    {...register(name, rest)}
                />
                {errors[name] && <Styled.ErrorMsg>{errors[name].message}</Styled.ErrorMsg>}
            </Styled.FormInput>
        );
    };

export default memo(FormInput);
