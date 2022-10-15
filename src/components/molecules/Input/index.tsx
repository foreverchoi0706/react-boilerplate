import {FormLabel, FormLabelProps, Input, InputProps, Text as T} from "@chakra-ui/react";
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

interface IText extends InputProps {
    registerOptions?: RegisterOptions
}


export const Label: FC<PropsWithChildren<FormLabelProps>> = ({children, ...rest}) => {
    const context = useContext<IContext>(Context);
    return <FormLabel htmlFor={context.id} {...rest}>{children}</FormLabel>
};


export const Text: FC<IText> = ({registerOptions, ...rest}) => {
    const {id, name} = useContext<IContext>(Context);
    const {register} = useFormContext();
    return <Input id={id} {...rest} {...register(name, registerOptions)} />
};

export const Message: FC = () => {
    const {name} = useContext<IContext>(Context);
    const {errors} = useFormState();
    return <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <T color="red.500">{message}</T>}
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