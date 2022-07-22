import React, { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button } from "@material-ui/core";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import useLoginMutation from "hooks/mutations/useLoginMutation";
import RHFProvider from "components/RHFProvider";
import RHFInput from "components/molecules/RHFInput";

const About: FC = () => {
  const { isLoading, data } = useUserInfoQuery();

  const { mutate } = useLoginMutation();

  const handleSubmit: SubmitHandler<ILoginInfo> = useCallback((loginInfo) => {
    mutate(loginInfo);
  }, []);

  if (isLoading) return <div>LOADING...</div>;

  return (
    <RHFProvider onSubmit={handleSubmit} defaultValues={data}>
      <RHFInput
        label="ID"
        name="id"
        type="text"
        required="필수"
        maxLength={{
          value: 10,
          message: "23213",
        }}
      />
      <RHFInput label="PW" name="pw" type="datetime-local" required="true" />
      <RHFInput label="USER" name="user" type="checkbox" />
      <RHFInput label="AGE" name="age" type="radio" />
      <RHFInput label="AGE" name="age" type="radio" />
      <Button type="submit" variant="contained" color="primary">
        SUBMIT
      </Button>
    </RHFProvider>
  );
};

export default About;
