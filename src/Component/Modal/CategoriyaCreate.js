import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Https } from '../../Https';
import { useGet, usePost, useUpdate } from '../../utils/Hooks'
import { toast } from 'react-toastify';

import { useContext } from 'react';
import { Context } from '../../utils/Context';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
const validationSchema = yup.object({

    name_Uz: yup
        .string('Enter your name_Uz')
        .required('name_Uz is required')
    ,

    name_Ru: yup
        .string('Enter your name_Ru')
        .required('name_Ru is required'),

    name_En: yup
        .string('Enter your name_En')
        .required('name_En is required')
    ,

});
export const CategoryCreate = ({ openCreate, setOpenCreate }) => {
    const [ButtonDisablet, setButtonDisablet] = useState(false)
    const handleCloseCreate = () => setOpenCreate(false);
    const [ImgInformation, setImgInformation] = useState()


    const Mutate = usePost('/category')
    const { data, isSuccess,refetch } = useGet(['category'], '/category')
    const formik = useFormik({
        initialValues: {
            name_Uz: "",
            name_Ru: "",
            name_En: "",

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setButtonDisablet(true)
            Mutate.mutate(
                {
                    ...values,
                    photoId: ImgInformation.id
                }, {
                onSuccess: (data => {
                    toast.success('Add Category')
                    setButtonDisablet(false)
                    refetch()
                }),
                onError: (data => {
                    toast.error("Error")
                    setButtonDisablet(false)
                })
            }
            )
            console.log(values);
        },

    });
    return (<>

        <Modal
            open={openCreate}
            onClose={handleCloseCreate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Create Category</h1>
                    <div className='CreatetUzRuEn'>
                        <TextField
                            id="name_Uz"
                            label="name_Uz"
                            variant="outlined"
                            name='name_Uz'
                            value={formik.values.name_Uz}
                            defaultValue={formik.values.name_Uz}
                            onChange={formik.handleChange}
                            error={formik.touched.name_Uz && Boolean(formik.errors.name_Uz)}
                            helperText={formik.touched.name_Uz && formik.errors.name_Uz} />
                        <TextField
                            id="name_Ru"
                            label="name_Ru"
                            variant="outlined"
                            name='name_Ru'
                            value={formik.values.name_Ru}
                            defaultValue={formik.values.name_Ru}
                            onChange={formik.handleChange}
                            error={formik.touched.name_Ru && Boolean(formik.errors.name_Ru)}
                            helperText={formik.touched.name_Ru && formik.errors.name_Ru} />
                        <TextField
                            id="name_En"
                            label="name_En"
                            variant="outlined"
                            name='name_En'
                            value={formik.values.name_En}
                            defaultValue={formik.values.name_En}
                            onChange={formik.handleChange}
                            error={formik.touched.name_En && Boolean(formik.errors.name_En)}
                            helperText={formik.touched.name_En && formik.errors.name_En} />
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

                </form>
            </Box>



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
    const { data, isSuccess,refetch } = useGet(['category'], '/category')
    
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
                refetch()
            },
            onError: () => {
                toast.error('Error')
            }
        }
        )

    }
  
    
   
    const formik = useFormik({
        initialValues:{
            name_Uz: UpdateItem?.Name_Uz,
            name_Ru: UpdateItem?.Name_Ru,
            name_En: UpdateItem?.Name_En,
    
        } ,
        validationSchema: validationSchema,
        
        onSubmit: (values) => {
            
            put.mutate(
                {
                    ...values,
                    photoId: ImgInformation.id
                }, {
                onSuccess: (data => {
                    toast.success('Add Category')


                }),
                onError: (data => {
                    toast.error("Error")

                })
            }
            )
            console.log(values);
        },

    });

    return (
        <>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Create Category</h1>
                        <div className='CreatetUzRuEn'>
                            <TextField
                                id="name_Uz"
                                label="name_Uz"
                                variant="outlined"
                                name='name_Uz'
                                value={formik.values.name_Uz}
                                defaultValue={formik.values.name_Uz}
                                onChange={formik.handleChange}
                                error={formik.touched.name_Uz && Boolean(formik.errors.name_Uz)}
                                helperText={formik.touched.name_Uz && formik.errors.name_Uz} />
                            <TextField
                                id="name_Ru"
                                label="name_Ru"
                                variant="outlined"
                                name='name_Ru'
                                value={formik.values.name_Ru}
                                defaultValue={formik.values.name_Ru}
                                onChange={formik.handleChange}
                                error={formik.touched.name_Ru && Boolean(formik.errors.name_Ru)}
                                helperText={formik.touched.name_Ru && formik.errors.name_Ru} />
                            <TextField
                                id="name_En"
                                label="name_En"
                                variant="outlined"
                                name='name_En'
                                value={formik.values.name_En}
                                defaultValue={formik.values.name_En}
                                onChange={formik.handleChange}
                                error={formik.touched.name_En && Boolean(formik.errors.name_En)}
                                helperText={formik.touched.name_En && formik.errors.name_En} />
                        </div>
                        <Upload

                            name='photo'
                            action={`${Https}upload/upload`}
                            listType="picture"
                            maxCount={1}
                            onChange={(data) => setImgInformation(data.file.response)}
                            onRemove
                        >
                            <img style={{ height: '100px' }} src={`${Https}upload/${UpdateItem?.ImgPath}`} alt='Rasm topilmadi' />

                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                        <button  className='ButtonSuccess' style={{ marginTop: '20px' }}>Create</button>

                    </form>
                </Box>
            </Modal>

        </>
    )
}
