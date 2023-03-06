import React, { useContext } from 'react'
import { Alert, Space, Spin } from 'antd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { display, height, padding } from '@mui/system';
import { Context } from '../../utils/Context';

export const LoadingSpinner = () => {
   
   
    const {openLoading}=useContext(Context)
    return (
        <div>
          
            <Modal
                open={openLoading}
               
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 200,

                    bgcolor: 'background.paper',
                    border: 'none',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 1,
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    padding:'0px 0px 50px'

                }}>
                    <Spin   size="large">
                        <div  className="content" />
                        <div style={{marginTop:"90px"}}><h1>Loading</h1></div>

                    </Spin>
                </Box>
            </Modal>

        </div>
        // <Spin size="large">
        //     <div className="content" />
        //     {/* <div style={{marginTop:"90px"}}><h1>Loading</h1></div> */}

        // </Spin>
    )
}
