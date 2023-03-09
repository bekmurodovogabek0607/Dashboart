import React, { useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Https } from '../../Https';
import { usePost, useUpdate } from '../../utils/Hooks'
import { toast } from 'react-toastify';

import { useContext } from 'react';
import { Context } from '../../utils/Context';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

export const CategoryCreate = ({ openCreate, setOpenCreate }) => {
    const [ButtonDisablet, setButtonDisablet] = useState(false)
    const handleCloseCreate = () => setOpenCreate(false);
    const [ImgInformation, setImgInformation] = useState()
    const [name_Uz, setName_Uz] = useState()
    const [name_Ru, setName_Ru] = useState()
    const [name_En, setName_En] = useState()

    const Mutate = usePost('/category')
    function CreateCateg(e) {
        e.preventDefault()
        setButtonDisablet(true)
        Mutate.mutate(
            {
                name_Uz: name_Uz,
                name_Ru: name_Ru,
                name_En: name_En,
                photoId: ImgInformation.id
            }, {
            onSuccess: (data => {
                toast.success('Add Category')
                setButtonDisablet(false)
                setName_Uz('')
                setName_Ru('')
                setName_En('')

            }),
            onError: (data => {
                toast.error("Error")
                setButtonDisablet(false)
            })
        }
        )


    }
    return (<>

        <Modal
            open={openCreate}
            onClose={handleCloseCreate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        ><form onSubmit={(e) => { CreateCateg(e) }}>

                <Box sx={style}>
                    <h1>Create Category</h1>
                    <div className='CreatetUzRuEn'>
                        <TextField value={name_Uz} onChange={(e) => { setName_Uz(e.target.value) }} required id="outlined-basic" label="Name_Uz" variant="outlined" />
                        <TextField value={name_Ru} onChange={(e) => setName_Ru(e.target.value)} required id="outlined-basic" label="Name_Ru" variant="outlined" />
                        <TextField value={name_En} onChange={(e) => setName_En(e.target.value)} required id="outlined-basic" label="Name_Uz" variant="outlined" />
                    </div>
                    <Upload

                        name='photo'
                        action={`${Https}upload/upload`}
                        listType="picture"
                        maxCount={1}
                        onChange={(data) => setImgInformation(data.file.response)}
                        onRemove
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    <button disabled={ButtonDisablet} className='ButtonSuccess' style={{ marginTop: '20px' }}>Create</button>
                </Box>

            </form>

        </Modal>
    </>

    )
}


export const UpdateCategori = ({ openUpdate, setOpenUpdate }) => {
    const { UpdateItem } = useContext(Context)
    console.log(UpdateItem);
    const handleCloseUpdate = () => setOpenUpdate(false);
    const [ImgInformation, setImgInformation] = useState()
    const [name_Uz, setName_Uz] = useState()
    const [name_Ru, setName_Ru] = useState()
    const [name_En, setName_En] = useState()
    const put = useUpdate(`/category/${UpdateItem?.Id}`)
    console.log(ImgInformation);
    function UpdateItemFunction() {
        put.mutate(
            {
                name_Uz: name_Uz,
                name_Ru: name_Ru,
                name_En: name_En,
                photoId: ImgInformation?.file?.response?.id
            }, {
            onSuccess: () => {
                toast.success('Updated')
            },
            onError: () => {
                toast.error('Error')
            }
        }
        )

    }


    return (
        <>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Create Category</h1>
                    <div className='CreatetUzRuEn'>
                        <TextField value={name_Uz} defaultValue={UpdateItem?.Name_Uz}  onChange={(e) => { setName_Uz(e.target.value) }} required id="outlined-basicUZ" label="Name_Uz" variant="outlined" />
                        <TextField value={name_Ru} defaultValue={UpdateItem?.Name_Ru} onChange={(e) => setName_Ru(e.target.value)} required id="outlined-basicRu" label="Name_Ru" variant="outlined" />
                        <TextField value={name_En} defaultValue={UpdateItem?.Name_En} onChange={(e) => setName_En(e.target.value)} required id="outlined-basicEn" label="Name_Uz" variant="outlined" />
                    </div>
                    <img style={{ height: '100px' }} src={`${Https}upload/${UpdateItem?.ImgPath}`} alt='Rasm topilmadi' />
                    <Upload

                        name='photo'
                        action={`${Https}upload/upload`}
                        listType="picture"
                        maxCount={1}
                        onChange={(data) => setImgInformation(data)}
                        onRemove
                    >
                        <Button icon={<UploadOutlined />}>Change img</Button>
                    </Upload>
                    <button onClick={() => { UpdateItemFunction() }} className='ButtonSuccess' style={{ marginTop: '20px' }}>Update</button>
                </Box>
            </Modal>

        </>
    )
}
