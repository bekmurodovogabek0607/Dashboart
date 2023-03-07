import React, { useState } from 'react'
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

import { Https } from '../../Https';
import { DeleteModal } from '../Modal/CategoriyaDelete';
export const TableCategory = ({ columns, rows ,refetch}) => {
    const [detetedId,setDeleted]=useState()
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = (id) =>{setOpenDelete(true); setDeleted(id)} ;
    console.log(detetedId);
    return (
        <>
        <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete} detetedId={detetedId} refetch/>
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
                                    src={`${Https}/upload/${row.ImgPath}`}
                                />
                            </TableCell>
                            <TableCell align="left">{row.Name}</TableCell>
                            
                            <TableCell align="left">
                                <div className='DeleteUpdateDiv'>
                                    <button className='ButtonUpdate' ><i class='bx bx-pencil' ></i></button>
                                    <button onClick={()=>{handleOpenDelete(row.Id)}} className='ButtonDelete'><i class='bx bx-trash'></i></button>
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
