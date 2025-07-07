import React, { useState } from 'react'
import {Button,Typography} from '@mui/material'
const Counter = () => {
    var[val,setVal]=useState(0)
  return (
    <div>
      <Typography variant='h3'>count:{val}</Typography>
      <Button variant='contained'color='success'

      onClick={()=>{setVal(++val)}}

      
      
      
      >+</Button>&nbsp;
        <Button variant='contained'color='error'
              onClick={()=>{setVal(--val)}}

        
        >-</Button>&nbsp;

    </div>
  )
}

export default Counter
