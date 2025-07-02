import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const First = () => {
  return (
    <div>
      <h1>welcome to first page</h1>
      <input type="text" placeholder='username'/><br /><br/>
      <input type="password" placeholder='password' /><br/><br/>
      <button>login</button>
      <br /><br /><br />
      <Typography variant="h1">Welcome to first page</Typography>
      <TextField label="username" variant="outlined"/>&nbsp;&nbsp;
      <TextField label="username" variant="filled"/>&nbsp;&nbsp;
      <TextField label="username" variant="standard"/><br />
      <Button variant="text">login</Button>&nbsp;&nbsp;
      <Button variant="contained">login</Button>&nbsp;&nbsp;
      <Button variant="outlined">login</Button>
    </div>
  )
}

export default First
