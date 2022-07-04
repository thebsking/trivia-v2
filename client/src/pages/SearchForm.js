import React from "react";
import { Button, ButtonGroup } from '@mui/material'
import Dropdown from "../components/Dropdown";
import ResultsContainer from "../components/ResultsContainer";
import TopBar from '../components/TopBar';

const SearchForm = () => {

  const listOptions = [
    'One', 'TWO', 'Threee'
  ]

  const listOptionsTwo = [
    'Easy', 'Medium', 'Hard'
  ]

  const catSelect = document.getElementById('cat-select');

  return (
    <>
      <TopBar />
          <div id="input-div" className="center-div">
            <Dropdown label="Category" id="cat-select" options={listOptions} />
            <ButtonGroup variant="contained" orientation="vertical" >
              <Button>Search by Category</Button>
              <Button>Range Questions</Button>
              <Button>Random</Button>
            </ButtonGroup>
          </div>
        <div id="results">
          <ResultsContainer />
        </div>
    </>
  )
}

export default SearchForm;