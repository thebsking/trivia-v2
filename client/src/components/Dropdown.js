import React, { useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const DropDown = (props) => {

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const menuItemList = (array) => {
    return array.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>);
  }



  return (
    <FormControl sx={{m: 1, width: '80%'}}>
      <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select id={props.id} value={value} onChange={handleChange} defaultValue={props.label}>
        {menuItemList(props.options)}
      </Select>
    </FormControl>
  )
};

export default DropDown;