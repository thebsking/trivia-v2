import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

const TopBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <ButtonGroup variant='text' aria-label='nav-btns'>
        <Button>Search Database</Button>
        <Button>Add to Database</Button>
        <Button disabled>Create New Game</Button>
      </ButtonGroup>
    </Box>
  )
};

export default TopBar;