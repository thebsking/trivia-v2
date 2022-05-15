import React from "react";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";

const Home = () => {
  const listOptions = [
    'One','TWO','Threee'
  ]
  return (
    <div id="input-div">
      <Dropdown label="Question Type" id="type-select" options={listOptions} />
      <Dropdown label="Category" id="cat-select" options={listOptions} />
      <Input id="q-input" label="Question" />
      <Input id="a-input" label="Answer" />
    </div>
  )
}

export default Home;