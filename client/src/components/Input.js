import React, { useState } from "react";
import { TextField, FormControl } from "@mui/material";

const Input = (props) => {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, width: '80%' }}>
      <TextField id={props.id} label={props.label} onChange={handleChange} value={value} />
    </FormControl>

  )
};

export default Input;