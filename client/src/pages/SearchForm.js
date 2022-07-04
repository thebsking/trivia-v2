import React, { useState } from "react";
import { Button, ButtonGroup, Card } from '@mui/material'
import Dropdown from "../components/Dropdown";
import ResultsContainer from "../components/ResultsContainer";
import TopBar from '../components/TopBar';
import axios from "axios";

const SearchForm = () => {

  const listOptions = [
    'One', 'TWO', 'Threee'
  ]

  const [results, setResults] = useState([])

  const handleRandom = () => {
    axios.get('/api/questions')
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <TopBar />
      <div id="input-div" className="center-div">
        <Dropdown label="Category" id="cat-select" options={listOptions} />
        <ButtonGroup variant="contained" orientation="vertical" >
          <Button>Search by Category</Button>
          <Button>Range Questions</Button>
          <Button onClick={handleRandom}>Random</Button>
        </ButtonGroup>
      </div>
      <div id="results">
        {results.map(x => {
          return (
            <Card className="q-card">
              <p>Category: {x.category}</p>
              <p>Question: {x.question}</p>
              <p>Answer: {x.answer}</p>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default SearchForm;