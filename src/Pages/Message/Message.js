import React, { useState } from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGet, useUpdate } from '../../utils/Hooks';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { toast } from 'react-toastify';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Message = () => {
  const [ChangeStatusId, setChangeStatusId] = useState()
  const { data, isSuccess } = useGet(['message'], '/message')
  const UpdateStatus = useUpdate(`/message/${ChangeStatusId}`)
  
  function EditStatusMessage(text) {
    
    UpdateStatus.mutate({ status: text },{
      onSuccess: () => {
        toast.success('ozgartirildi')
      },
      onError: () => {
        toast.error('error')
      }
    })
  }
  return (
    <>
      <Navbar />
      <div className='GlavniSketel'>
        <div>
          <NavbarLeft />
        </div>
        <div style={{ marginTop: '0px' }}>
          {/* Faqat shu joyi o'zgaradi */}
          <h1>Message</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:"bold"}} align="left">subject</TableCell>

                  <TableCell sx={{fontWeight:"bold"}} align="left">phone</TableCell>
                  <TableCell sx={{fontWeight:"bold"}} align="left">message</TableCell>
                  <TableCell sx={{fontWeight:"bold"}} align="left">status</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell align="left">{row.subject}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.message}</TableCell>
                    <TableCell align="left">
                      <FormControl >

                        <NativeSelect
                          defaultValue={row.status}
                          inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                          }}
                          onChange={(e)=>{EditStatusMessage(e.target.value);setChangeStatusId(row.id)}}
                        >
                          <option  value={"PENDING"}>PENDING</option>
                          <option  value={"REJECTED"}>REJECTED</option>
                          <option  value={"RESOLVED"}>RESOLVED</option>
                        </NativeSelect>
                      </FormControl>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>

    </>
  )
}
