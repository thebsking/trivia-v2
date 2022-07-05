import React, { useState } from "react";
import { Button } from '@mui/material'
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import AdminTopBar from '../components/AdminTopBar'

const AddForm = () => {

  const [type, setType] = useState('');
  const [cat, setCat] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  function handleSubmit(){
    console.log(type, cat, question, answer);
  }

  const listOptions = [
    'One', 'TWO', 'Threee'
  ]

  return (
    <>
      <AdminTopBar />
      <form>
        <div className="center-div">
          <Dropdown label="Question Type" id="type-select" options={listOptions} onChange={e => setType(e.target.value)} />
          <Dropdown label="Category" id="cat-select" options={listOptions} onChange={e => setCat(e.target.value)} />
          <Input id="q-input" label="Question" onChange={e => setQuestion(e.target.value)} />
          <Input id="a-input" label="Answer" onChange={e => setAnswer(e.target.value)} />
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </>
  )
}

export default AddForm;