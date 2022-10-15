import React, {FC, PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";

interface IProps {
    onSubmit: SubmitHandler<any>;
}

const RHFProvider: FC<PropsWithChildren<IProps>> = ({children, onSubmit}) => {
    const methods = useForm({});

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
}

export default RHFProvider;