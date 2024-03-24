import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { deleteUserAction } from "../action";

export const UsersTable = ({handleEdit}) =>{
const state = useSelector((state)=>state);
console.log("state", state);

const {users} = useSelector((state) => state);
console.log(users);

const dispatch = useDispatch();
const handleDelete = (user) =>{
    dispatch(deleteUserAction(user));
}
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 &&
            users.map((row,i) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.fname}</TableCell>
                <TableCell>{row.lname}</TableCell>
                <TableCell>
                <Button variant="contained" style={{background : "yellow", color :"black"}}
                onClick={()=> {handleEdit(row,i)}}>
                    Edit User
                </Button>
                </TableCell>
                <TableCell>
                 <Button variant="contained" style={{background : "red", }}
                 onClick={()=> {handleDelete(row)}}>
                    Delete User
                 </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}