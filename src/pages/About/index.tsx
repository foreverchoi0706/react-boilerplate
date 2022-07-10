import React, { ChangeEvent, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";

const names = [
  ["사과", "APPLE"],
  ["오렌지", "ORANGE"],
  ["복숭아", "PITCH"],
];

export default function MultipleSelectCheckmarks() {
  const { control, setValue, handleSubmit } = useForm<FieldValues>();

  const [selectedItems, setSelectedItems] = useState<string[]>([""]);

  const handleChange = ({ target: { value } }: any) => {
    const selectedAll = !value.length || value[value.length - 1] === "";
    const items = selectedAll ? [""] : value.filter((item: any) => item !== "");
    // @ts-ignore
    const map = new Map(names);
    const values = items.map((item: any) => map.get(item));
    setSelectedItems(items);
    setValue("test", values);
  };

  const onSubmit = (fieldValues: FieldValues) => {
    console.log(fieldValues);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel id="demo-multiple-checkbox-label">NAME</InputLabel>
        <Controller
          name="test"
          control={control}
          render={() => (
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              onChange={handleChange}
              value={selectedItems}
              variant="outlined"
              renderValue={(selected: any) => selected.join(", ")}
            >
              <MenuItem value="">
                <Checkbox
                  color="primary"
                  checked={selectedItems.some((item) => item === "")}
                />
                <ListItemText primary="전체" />
              </MenuItem>
              {names.map(([title, value]) => (
                <MenuItem key={title} value={title}>
                  <Checkbox
                    color="primary"
                    checked={selectedItems.indexOf(title) > -1}
                  />
                  <ListItemText primary={title} />
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <hr />
        <Button type="submit" color="primary" variant="contained">
          SUBMIT
        </Button>
      </form>
    </section>
  );
}
