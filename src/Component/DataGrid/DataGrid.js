import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
export const DataGridPage = ({columns,rows}) => {
  return (
    <Box sx={{ height: 'calc(100vh - 150px)', width: '100%', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
       
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}

       
      />
    </Box>
  )
}
