import { FC, memo, useId } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    label?: string;
    name: string;
    value: string;
}

const FormInput: FC<IProps> =
    ({
        label,
        name,
        value,
        ...rest
    }) => {
        const { register, formState: { errors } } = useFormContext();

        const id = useId();
        return (
            <Styled.FormInputCheckBox>
                <Input
                    id={id}
                    type="radio"
                    value={value}
                    required={errors[name]}
                    {...register(name, rest)}
                />
                <Styled.Label htmlFor={id}>{label}</Styled.Label>
            </Styled.FormInputCheckBox>
        );
    };

export default memo(FormInput);
