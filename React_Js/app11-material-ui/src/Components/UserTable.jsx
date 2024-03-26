import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUseractions } from '../action'

const UserTable = ({handleedit}) => {
  const {users}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const handledelete=(index)=>{
    dispatch(DeleteUseractions(index)) 
  }



  return  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Password</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {  users.length > 0 && users.map((row,i) => (
        <TableRow
          key={i}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell key={i}>{row.fname}</TableCell>
          <TableCell key={i}>{row.age}</TableCell>
          <TableCell key={i}>{row.email}</TableCell>
          <TableCell key={i}>{row.password}</TableCell>
          <TableCell>
            <Button variant="contained" onClick={()=>handleedit(row,i)}>EditUser</Button>
          </TableCell>
          <TableCell>
          <Button variant="contained" style={{backgroundColor:"red"}} onClick={()=>{handledelete(i)}}>DeleteUser</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    
  
}

export default UserTable
