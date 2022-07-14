import React, { FC, useState } from "react";
import { Controller } from "react-hook-form";
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import { UseFormReturn } from "react-hook-form/dist/types";

const names = [
  ["사과", "APPLE"],
  ["오렌지", "ORANGE"],
  ["복숭아", "PITCH"],
];

interface IProps extends Pick<UseFormReturn, "setValue" | "control"> {
  name: string;
}

const DropDownMultipleItems: FC<IProps> = ({ name, control, setValue }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([""]);

  const handleChange = ({ target: { value } }: any) => {
    const selectedAll = !value.length || value[value.length - 1] === "";
    const items = selectedAll ? [""] : value.filter((item: any) => item !== "");
    // @ts-ignore
    const map = new Map(names);
    const values = items.map((item: any) => map.get(item));
    setSelectedItems(items);
    setValue(name, values);
  };

  return (
    <section>
      <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
      <Controller
        name={name}
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
            <MenuItem value="" defaultChecked>
              <Checkbox
                color="primary"
                checked={selectedItems.some((item) => item === "")}
              />
              <ListItemText primary="전체" />
            </MenuItem>
            {names.map(([title]) => (
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
    </section>
  );
};

export default DropDownMultipleItems;
