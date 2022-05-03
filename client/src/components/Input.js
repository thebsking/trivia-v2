import React from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <TextField id={props.id} label={props.label} />
  )
};

export default Input;