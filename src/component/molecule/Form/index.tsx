import {
  Checkbox as CUICheckbox,
  FormLabel,
  FormLabelProps,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio as CUIRadio,
  Select as CUISelect,
  SelectProps,
  Text as FormText,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React, {
  createContext,
  FC,
  OptionHTMLAttributes,
  PropsWithChildren,
  useContext,
  useId,
  useMemo,
} from "react";
import {
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useForm,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface IContext {
  id?: string;
  name: string;
}

const Context = createContext<IContext>({
  id: "",
  name: "",
});

const Checkbox: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUICheckbox id={id} {...register(name, props)} />;
};

const Field: FC<PropsWithChildren<IContext>> = ({ children, ...rest }) => {
  const id = useId();
  const value = useMemo<IContext>(
    () => ({
      ...rest,
      id: rest.id || id,
    }),
    [rest]
  );
  return (
    <Context.Provider value={value}>
      <div>{children}</div>
    </Context.Provider>
  );
};

interface IForm {
  defaultValues: Record<string, any>;
  onSubmitForm: SubmitHandler<any>;
}

const Form: FC<PropsWithChildren<IForm>> = ({
  children,
  defaultValues,
  onSubmitForm,
}) => {
  const methods = useForm({
    defaultValues,
    mode: "onChange",
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <FormProvider {...methods}>
      <form
        onReset={() => {
          methods.reset(defaultValues);
          navigate(pathname);
        }}
        onSubmit={methods.handleSubmit(onSubmitForm)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const Label: FC<PropsWithChildren<FormLabelProps>> = ({
  children,
  ...rest
}) => {
  const context = useContext<IContext>(Context);
  return (
    <FormLabel htmlFor={context.id} {...rest}>
      {children}
    </FormLabel>
  );
};

const InputNumber: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return (
    <NumberInput>
      <NumberInputField
        id={id}
        {...register(name, {
          ...props,
          valueAsNumber: true,
        })}
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

const InputPassword: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <Input id={id} type="password" {...register(name, props)} />;
};

const InputText: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <Input id={id} type="text" {...register(name, props)} />;
};

const Date: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <Input id={id} type="date" {...register(name, props)} />;
};

const Message: FC = () => {
  const { name } = useContext<IContext>(Context);
  const { errors } = useFormState();
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <FormText color="red.500">{message}</FormText>}
    />
  );
};

const Option: FC<
  PropsWithChildren<OptionHTMLAttributes<HTMLOptionElement>>
> = ({ children, ...rest }) => {
  return <option {...rest}>{children}</option>;
};

const Radio: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUIRadio id={id} {...register(name, props)} />;
};

const Select: FC<PropsWithChildren<SelectProps>> = ({ children, ...rest }) => {
  const { name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return (
    <CUISelect {...register(name)} {...rest}>
      {children}
    </CUISelect>
  );
};

export default Object.assign(Form, {
  Checkbox,
  Date,
  Field,
  InputNumber,
  InputPassword,
  InputText,
  Label,
  Message,
  Option,
  Radio,
  Select,
});
