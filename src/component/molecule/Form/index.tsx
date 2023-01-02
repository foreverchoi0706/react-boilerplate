import * as CUI from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React, {
  createContext,
  FC,
  FormHTMLAttributes,
  OptionHTMLAttributes,
  PropsWithChildren,
  useContext,
  useId,
  useMemo,
} from "react";
import { RegisterOptions, useFormContext, useFormState } from "react-hook-form";

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
  return <CUI.Checkbox id={id} {...register(name, props)} />;
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

const Form: FC<PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>> = ({
  children,
  ...rest
}) => {
  return <form {...rest}>{children}</form>;
};

const Label: FC<PropsWithChildren<CUI.FormLabelProps>> = ({
  children,
  ...rest
}) => {
  const context = useContext<IContext>(Context);
  return (
    <CUI.FormLabel htmlFor={context.id} {...rest}>
      {children}
    </CUI.FormLabel>
  );
};

const InputNumber: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return (
    <CUI.NumberInput>
      <CUI.NumberInputField
        id={id}
        {...register(name, {
          ...props,
          valueAsNumber: true,
        })}
      />
      <CUI.NumberInputStepper>
        <CUI.NumberIncrementStepper />
        <CUI.NumberDecrementStepper />
      </CUI.NumberInputStepper>
    </CUI.NumberInput>
  );
};

const InputPassword: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUI.Input id={id} type="password" {...register(name, props)} />;
};

const InputText: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUI.Input id={id} type="text" {...register(name, props)} />;
};

const Date: FC<RegisterOptions> = (props) => {
  const { id, name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUI.Input id={id} type="date" {...register(name, props)} />;
};

const Message: FC = () => {
  const { name } = useContext<IContext>(Context);
  const { errors } = useFormState();
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <CUI.Text color="red.500">{message}</CUI.Text>}
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
  return <CUI.Radio id={id} {...register(name, props)} />;
};

const Select: FC<PropsWithChildren<CUI.SelectProps>> = ({
  children,
  ...rest
}) => {
  const { name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return (
    <CUI.Select {...register(name)} {...rest}>
      {children}
    </CUI.Select>
  );
};

const Switch: FC<CUI.SwitchProps> = (props) => {
  const { name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUI.Switch {...register(name)} {...props} />;
};

const Textarea: FC<CUI.TextareaProps> = (props) => {
  const { name } = useContext<IContext>(Context);
  const { register } = useFormContext();
  return <CUI.Textarea {...register(name)} {...props} />;
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
  Switch,
  Textarea,
});
