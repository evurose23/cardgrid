
import { colors, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'

import React, { useEffect, useState } from 'react'


const Datainput = () => {
  var [user,setUser] = useState([])
 // useEffect(()=>{},[])
 useEffect(()=>{
// axios.get("url")
axios
.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{console.log(res)
  setUser(res.data)
})
.catch((err)=>{console.log(err)})

 }
 ,[])
  return (
    <div>
      <Typography variant='h3'>Hello</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>



            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val,i)=>{
              return <TableRow key={i}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.address.city}</TableCell>

              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>

     
    </div>
  )
}

export default Datainput

