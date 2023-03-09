import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDelete, useGet } from '../../utils/Hooks';
import { toast } from 'react-toastify';
import { Context } from '../../utils/Context';
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
    borderRadius: 2
};
export const DeleteModal = ({ openDelete, setOpenDelete }) => {
    const {DeleteId}=useContext(Context)
    const handleCloseDelete = () => setOpenDelete(false);
    const mutation = useDelete(`/category`)
    const {refetch } = useGet(['category'], '/category')
    function Delete() {
      mutation.mutate(DeleteId,{
        onSuccess:(data)=>{
            console.log(data);
            refetch()
            handleCloseDelete()
            toast.success('Category deleted')
        },
        onError:(data)=>{
            toast.error('Error')
        }
      })
       
    }
    return (<>

        <Modal
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h1 style={{ padding: '0px 0px 30px' }}>Delete Category</h1>
                <button onClick={() => { Delete() }} className='ModalDelete'>Delete</button>
            </Box>
        </Modal>
    </>

    )
}
