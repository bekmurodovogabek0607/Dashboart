import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius:2
};
export const DeleteModal = ({openDelete,setOpenDelete}) => {
    
    const handleCloseDelete = () => setOpenDelete(false);
    return (<>
        
        <Modal
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h1 style={{padding:'0px 0px 30px'}}>Delete Product</h1>
               <button className='ModalDelete'>Delete</button>
            </Box>
        </Modal>
    </>

    )
}
