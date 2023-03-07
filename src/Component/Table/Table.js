import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DeleteModal } from '../Modal/ProductsDelete';
export const Tablee = ({ columns, rows }) => {
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
   
    return (
        <>
        <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete}/>
         <TableContainer  component={Paper}>
            <Table className='PozitionTableHead' sx={{ minWidth: 650  }}  aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {
                            columns?.map((item, index) => {
                                return (
                                    <TableCell key={index} >{item}</TableCell>
                                )
                            })
                        }
                        <TableCell ></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell align="left">
                                <Avatar
                                    sx={{ bgcolor: deepOrange[500] }}
                                    alt={row.Name}
                                    variant="rounded"
                                    src="https://media.istockphoto.com/id/1365598324/vector/red-apple-isolated.jpg?s=612x612&w=0&k=20&c=l2Q-ih_PLDTYkfax3xVnjU61QP8dFyv8fDoKIm022FA="
                                />
                            </TableCell>
                            <TableCell align="left">{row.Name}</TableCell>
                            <TableCell align="left">{row.Price}</TableCell>
                            <TableCell align="left">{row.Discount}</TableCell>
                            <TableCell align="left">{row.Active?<CheckIcon/>:<CloseIcon/>}</TableCell>
                            <TableCell align="left">{row.Color}</TableCell>
                            <TableCell align="left">{row.Decs}</TableCell>
                            <TableCell align="left">
                                <div className='DeleteUpdateDiv'>
                                    <button className='ButtonUpdate' ><i class='bx bx-pencil' ></i></button>
                                    <button onClick={()=>{handleOpenDelete()}} className='ButtonDelete'><i class='bx bx-trash'></i></button>
                                </div>


                            </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
       
    )
}
