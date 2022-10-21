import {
    Checkbox as FormCheckbox,
    FormLabel,
    FormLabelProps,
    Input as FormInput,
    Radio as FormRadio,
    Text as FormText
} from "@chakra-ui/react";
import {ErrorMessage} from '@hookform/error-message';
import React, {createContext, FC, PropsWithChildren, useContext, useId, useMemo} from "react";
import {RegisterOptions, useFormContext, useFormState} from "react-hook-form";

interface IContext {
    id?: string;
    name: string;
}

const Context = createContext<IContext>({
    id: "",
    name: ""
});

export const Label: FC<PropsWithChildren<FormLabelProps>> = ({children, ...rest}) => {
    const context = useContext<IContext>(Context);
    return <FormLabel htmlFor={context.id} {...rest}>{children}</FormLabel>
};

export const Input: FC<RegisterOptions> = (props) => {
    const {id, name} = useContext<IContext>(Context);
    const {register} = useFormContext();
    return <FormInput id={id}  {...register(name, props)} />
};

export const Checkbox: FC<RegisterOptions> = (props) => {
    const {id, name} = useContext<IContext>(Context);
    const {register} = useFormContext();
    return <FormCheckbox id={id}  {...register(name, props)} />
};

export const Radio: FC<RegisterOptions> = (props) => {
    const {id, name} = useContext<IContext>(Context);
    const {register} = useFormContext();
    return <FormRadio id={id}  {...register(name, props)} />
};

export const Message: FC = () => {
    const {name} = useContext<IContext>(Context);
    const {errors} = useFormState();
    return <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <FormText color="red.500">{message}</FormText>}
    />
}

export const Wrap: FC<PropsWithChildren<IContext>> = ({children, ...rest}) => {
    const id = useId();
    const value = useMemo<IContext>(() => ({
        ...rest,
        id: rest.id || id
    }), [rest]);
    return <Context.Provider value={value}>
        <div>{children}</div>
    </Context.Provider>;
};

export default null;