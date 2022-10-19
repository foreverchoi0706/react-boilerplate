import React, {FC, PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";


type TFunction<R, P> = (p: P) => R;

interface IProps {
    onSubmit: SubmitHandler<any>;
}

const RHFProvider: FC<PropsWithChildren<IProps>> = ({children, onSubmit}) => {

    const temp: TFunction<string, number | string> = (p) => {
        console.log(p)
        return "";
    }

    const methods = useForm({});
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
}

export default RHFProvider;