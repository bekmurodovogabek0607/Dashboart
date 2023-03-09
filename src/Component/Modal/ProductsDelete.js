import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Context } from '../../utils/Context';
import { useDelete, useGet } from '../../utils/Hooks';
import { toast } from 'react-toastify';
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
    const {DeleteId}=useContext(Context)
    const handleCloseDelete = () => setOpenDelete(false);
    const Delete=useDelete('/products')
    const {refetch}=useGet(['products'],'/products')
    function DeleteProduct() {
        Delete.mutate(DeleteId,{
            onSuccess:(data=>{
                handleCloseDelete()
                refetch()
                toast.success('Product Deleted')
            }),
            onError:()=>{
                toast.error('Error')
                handleCloseDelete()
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
                <h1 style={{padding:'0px 0px 30px'}}>Delete Product</h1>
               <button onClick={()=>{DeleteProduct()}} className='ModalDelete'>Delete</button>
            </Box>
        </Modal>
    </>

    )
}
