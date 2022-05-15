import React from "react";
import { TextField, InputLabel, FormControl } from "@mui/material";

const Input = (props) => {
  return (
    <FormControl sx={{m: 1, width:'80%'}}>
    <InputLabel id={props.label}>{props.label}</InputLabel>
    <TextField id={props.id} labelId={props.label} />
    </FormControl>
    
  )
};

export default Input;