import React from "react";
import { Button } from '@mui/material'
import Dropdown from "../components/Dropdown";
import ResultsContainer from "../components/ResultsContainer";

const SearchForm = () => {

  const listOptions = [
    'One', 'TWO', 'Threee'
  ]

  const listOptionsTwo = [
    'Easy', 'Medium', 'Hard'
  ]
  return (
    <div id='search-form'>
    <form action={console.log('data')}>
    <div id="input-div" className="center-div">
        <Dropdown label="Question Type" id="type-select" options={listOptions} />
        <Dropdown label="Category" id="cat-select" options={listOptions} />
        <Dropdown label="Difficulty" id="diff-select" options={listOptionsTwo} />
        <Button variant="contained" onClick={console.log(listOptions)}>Search</Button>
    </div>
    </form>
    <div id="results">
      <ResultsContainer />
    </div>
    </div>
  )
}

export default SearchForm;