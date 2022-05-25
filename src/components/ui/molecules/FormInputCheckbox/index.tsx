import { FC, memo } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import Input from "components/ui/atoms/Input";
import Styled from "./styled";


interface IProps extends RegisterOptions {
    label?: string;
    name: string;
}

const FormInput: FC<IProps> =
    ({
        label,
        name,
        ...rest
    }) => {
        const { register, formState: { errors } } = useFormContext();

        return (
            <Styled.FormInputCheckBox>
                <Input
                    id={name}
                    type="checkbox"
                    required={errors[name]}
                    {...register(name, rest)}
                />
                <Styled.Label htmlFor={name}>{label} {rest.required && <em>(필수)</em>}</Styled.Label>
            </Styled.FormInputCheckBox>
        );
    };

export default memo(FormInput);
