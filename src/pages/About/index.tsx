import React, { useEffect } from "react";
import DropDownMultipleItems from "components/molecules/DropDownMultipleItems";
import useUserInfoQuery from "hooks/queries/useUserInfoQuery";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

const About = () => {
  const { isLoading, data } = useUserInfoQuery();

  const { reset, watch, handleSubmit, register, setValue } = useForm();

  const values = watch();

  const handleClick = (selectedItem: string) => {
    const list = values.list;
    console.log(list, selectedItem);
    console.log(list.filter((item: string) => item !== selectedItem));
    setValue(
      "list",
      list.filter((item: string) => item !== selectedItem)
    );
  };

  const onSubmit = (fieldValues: FieldValues) => {
    console.log(fieldValues);
  };

  useEffect(() => {
    reset(data);
  }, [data]);

  if (isLoading) return <div>LOADING...</div>;

  return (
    <div>
      <DropDownMultipleItems />

      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} />
        <input {...register("pw")} />

        {values.list?.map((item: string) => (
          <h1 key={item}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </h1>
        ))}
      </form>
    </div>
  );
};

export default About;
