import React from "react";
import { Button } from '@mui/material'
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";

const AddForm = () => {

  const questType = document.getElementById('type-select');
  const questCat = document.getElementById('cat-select');
  const question = document.getElementById('q-input');
  const answer = document.getElementById('a-input');

  function saveForm(a,b,c,d){
    
    const newItem = {
      Type: a,
      Category: b,
      Question: c,
      Answer: d
    };

    console.log('yesplease')
  }

  const listOptions = [
    'One', 'TWO', 'Threee'
  ]

  return (
    <form action={console.log('data')}>
    <div className="center-div">
        <Dropdown label="Question Type" id="type-select" options={listOptions} />
        <Dropdown label="Category" id="cat-select" options={listOptions} />
        <Input id="q-input" label="Question" />
        <Input id="a-input" label="Answer" />
        <Button variant="contained" onClick={saveForm(questType, questCat, question, answer)}>Submit</Button>
    </div>
    </form>
  )
}

export default AddForm;