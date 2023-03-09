import React, { useContext } from 'react'
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
import { Context } from '../../utils/Context';
import { UpdateCategori } from '../Modal/CategoriyaCreate';
import { Https } from '../../Https';
import { ProductUpdate } from '../Modal/ProductCreate';
export const Tablee = ({ columns, rows }) => {
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const handleOpenUpdate = () => setOpenUpdate(true);
    const {setDeleteId,setUpdateItem}=useContext(Context)
    const handleOpenDelete = () => setOpenDelete(true);
   console.log(rows);
    return (
        <>
        
        <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete}/>
        <ProductUpdate openUpdate={openUpdate} setOpenUpdate={setOpenUpdate}/>

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
                                    src={`${Https}upload/${row.photoId}`}
                                />
                            </TableCell>
                            <TableCell align="left">{row.name_Uz}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.discount}</TableCell>
                            <TableCell align="left">{row.active?<CheckIcon/>:<CloseIcon/>}</TableCell>
                            {/* <TableCell align="left"><Switch /></TableCell> */}

                            <TableCell align="left">{row.color}</TableCell>
                            <TableCell align="left">{row.description_En}</TableCell>
                            <TableCell align="left">
                                <div className='DeleteUpdateDiv'>
                                    <button onClick={()=>{setUpdateItem(row);handleOpenUpdate()}} className='ButtonUpdate' ><i class='bx bx-pencil' ></i></button>
                                    <button onClick={()=>{handleOpenDelete();setDeleteId(row.Id)}} className='ButtonDelete'><i class='bx bx-trash'></i></button>
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
