import React, { FC, useCallback, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import useLoginMutation from "hooks/mutations/useLoginMutation";

const About: FC = () => {
  const { isLoading, data } = useUserInfoQuery();

  const { mutate } = useLoginMutation();

  const { control, reset, register, handleSubmit } = useForm<ILoginInfo>();

  const handleSubmitForm: SubmitHandler<ILoginInfo> = useCallback(
    (loginInfo) => {
      mutate(loginInfo);
    },
    []
  );

  useEffect(() => {
    if (data) {
      console.log(data);
      reset(data);
    }
  }, [data]);

  if (isLoading) return <div>LOADING...</div>;

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControl component="fieldset">
        <TextField type="text" variant="outlined" {...register("pw")} />
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel
                value="JORDAN"
                label="JORDAN"
                control={<Radio />}
              />
              <FormControlLabel value="JOY" label="JOY" control={<Radio />} />
              <FormControlLabel
                value="JOSEP"
                label="JOSEP"
                control={<Radio />}
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        SUBMIT
      </Button>
    </form>
  );
};

export default About;
