import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import TableCell from '@mui/material/TableCell';
import '../App.css'


const Basictable = () => {
    var people = [{name:"Tiya",place:"EKm",age:12},
        {name:"siya",place:"CUK",age:12},
        {name:"diya",place:"tCH",age:12},
        {name:"miya",place:"angmly",age:12}
        
        

    ]
  return (
    <div>
      <TableContainer className='box'>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {people.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.place}</TableCell>
                            <TableCell>{val.age}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Basictable


