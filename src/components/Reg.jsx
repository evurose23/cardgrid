import { Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const Reg = () => {
  return (
    <div>

      <Typography variant='h3'>Welcome to regisatration page</Typography>
      <TextField  label="usename " variant="outlined" />&nbsp;&nbsp;
      <TextField  label="age " variant="outlined" />&nbsp;&nbsp;
      <TextField  label="name" variant="outlined" />&nbsp;&nbsp;
      <TextField  label="place" variant="outlined" />&nbsp;&nbsp;
      <TextField  label="password " variant="outlined" /><br />
     <Button variant="contained">Login</Button>
    </div>
  )
}

export default Reg

