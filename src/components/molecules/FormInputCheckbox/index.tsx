import { FC, memo, useId } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    label?: string;
    name: string;
}

const FormInputCheckbox: FC<IProps> =
    memo(({
        label,
        name,
        ...rest
    }) => {
        const { register, formState: { errors } } = useFormContext();

        const id = useId();

        return (
            <Styled.FormInputCheckBox>
                <Input
                    id={id}
                    type="checkbox"
                    required={errors[name]}
                    {...register(name, rest)}
                />
                <Styled.Label htmlFor={id}>{label} {rest.required && <em>(필수)</em>}</Styled.Label>
            </Styled.FormInputCheckBox>
        );
    });

export default FormInputCheckbox;
