import React, { useState } from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
import { useDelete, useGet, usePost, useUpdate } from '../../utils/Hooks'
import parse from 'html-react-parser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify'
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
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    address: yup
        .string('Enter your adress')
        .required('Adress is required'),
    telegram: yup
        .string('Enter your telegram')
        .required('Telegram is required'),
    instagram: yup
        .string('Enter your instagram')
        .required('Instagram is required'),
    addressMap: yup
        .string('Enter your adressMap')
        .required('AdressMap is required'),
});
export const Information = () => {
    const { data, isSuccess,refetch } = useGet(['information'], '/information')


    console.log(data?.data);
    const [Updated, detUpdated] = useState(data?.data.length == 0 ? false : true)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [phone, setPhone] = useState(Updated ? data?.data[0]?.phone : [])
    const [phoneNumber, setPhoneNumber] = useState()
    const [UpdateId, setUpdateId] = useState()

    const CreateInformation = usePost('/information')
    const UpdateInformation = useUpdate(`/information/${UpdateId}`)
    const props = {
        mask: '999/99/999/99/99',
        maskChar: '_',
        alwaysShowMask: false,
        formatChars: {
            '9': '[0-9]',
            'a': '[A-Za-z]',
            '*': '[A-Za-z0-9]'
        },
        permanents: [2, 5] // permanents is an array of indexes of the non-editable characters in the mask
    }
    function AddPhone() {

        if (phoneNumber.split(' ').join('').length == 13) {
            setPhone([...phone, phoneNumber])
            setPhoneNumber('')
        }
        else {
            toast.error('Telefon nomer to\'liq emas')
        }

    }
    function RemoverPhoneNumber(tel) {
        setPhone(phone.filter(item => item != tel))
    }
    // setPhoneNumber(data?.data?.phone)

    const UpdateValue = Updated ? {
        email: `${data?.data[0]?.email}`,
        address: `${data?.data[0]?.address}`,
        telegram: `${data?.data[0]?.telegram}`,
        instagram: `${data?.data[0]?.instagram}`,
        addressMap: `${data?.data[0]?.addressMap}`
    } : {
        email: "",
        address: "",
        telegram: "",
        instagram: "",
        addressMap: ""

    }
    const formik = useFormik({
        initialValues: UpdateValue,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Updated ?
                UpdateInformation.mutate({
                    ...values,
                    phone
                }, {
                    onSuccess: () => {
                        toast.success('Updated')
                        refetch()
                    },
                    onError: () => {
                        toast.error('error')
                    }
                })
                :
                CreateInformation.mutate({
                    ...values,
                    phone
                }, {
                    onSuccess: () => {
                        toast.success('Created')
                        refetch()
                    },
                    onError: () => {
                        toast.error('error')
                    }
                })
        },

    });
    const DeleteInf = useDelete('/information')
    function DeleteInformation(id) {
        DeleteInf.mutate({ id }, {
            onSuccess: () => {
                toast.success("Success")
                refetch()
            },
            onError: () => {
                toast.error("Error")
            }
        })
        console.log(id);
    }
    return (
        <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div >
                    {/* Faqat shu joyi o'zgaradi */}
                    <div className='ControlPageNavbar'>
                        <h1>Information</h1>
                        <div>
                            {data?.data.length == 0 ? <button onClick={handleOpen} className='ButtonCreate'>Create</button> : null}
                        </div>
                    </div>
                    <div>

                        <>
                            <div className='Informations'>
                                <div>
                                    <p>{data?.data[0]?.address}</p>
                                    <a href={`mail:${data?.data[0]?.email}`}>{data?.data[0]?.email}</a><br />
                                    <a href={`${data?.data[0]?.instagram}`}>{data?.data[0]?.instagram}</a><br />
                                    <a href={`${data?.data[0]?.telegram}`}>{data?.data[0]?.telegram}</a><br />
                                    <div style={{ padding: "10px 0px", display: "flex", flexWrap: 'wrap' }}>

                                        {
                                            data?.data[0]?.phone.map((item) => {
                                                return (
                                                    <div className='PhoneNumberLIst'>{item}</div>
                                                )
                                            })
                                        }
                                    </div><br />
                                </div>
                                <div>
                                    <button onClick={() => { DeleteInformation(data?.data[0].id) }} className='ButtonDelete'>Delete</button>
                                    <button onClick={() => { setUpdateId(data?.data[0].id); handleOpen() }} className='ButtonUpdate'>Update</button>

                                </div>

                            </div>

                            {parse(data?.data[0]?.addressMap)}
                        </>


                    </div>
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={style}>
                        <h1>Add Information</h1>
                        <div className='CreatetUzRuEn'>
                            <TextField
                                id="address"
                                label="address"
                                variant="outlined"
                                name='address'
                                value={formik.values.address}
                                defaultValue={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                            <TextField
                                id="telegram"
                                label="Telegram"
                                variant="outlined"
                                name='telegram'
                                value={formik.values.telegram}
                                onChange={formik.handleChange}
                                error={formik.touched.telegram && Boolean(formik.errors.telegram)}
                                helperText={formik.touched.telegram && formik.errors.telegram}
                            />
                            <TextField
                                id="instagram"
                                label="Instagram"
                                variant="outlined"
                                name='instagram'
                                value={formik.values.instagram}
                                onChange={formik.handleChange}
                                error={formik.touched.instagram && Boolean(formik.errors.instagram)}
                                helperText={formik.touched.instagram && formik.errors.instagram} />
                        </div>
                        <div className='CreatetUzRuEn'>
                            <TextField
                                sx={{ width: "50%" }}
                                id="email"
                                label="Email"
                                variant="outlined"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} />
                            <TextField
                                sx={{ width: "50%" }}
                                id="addressMap"
                                label="addressMap"
                                variant="outlined"
                                name='addressMap'
                                value={formik.values.addressMap}
                                onChange={formik.handleChange}
                                error={formik.touched.addressMap && Boolean(formik.errors.addressMap)}
                                helperText={formik.touched.addressMap && formik.errors.addressMap} />

                        </div>
                        <div className='CreatetUzRuEn'>
                            <InputMask value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder='+998 99 123 45 67'  {...props} mask="+\9\9\8 99 999 99 99" maskChar=" " className='inputmask' />
                            <button type='button' onClick={() => { AddPhone() }} className='ButtonSuccess' >Phone add again</button>


                        </div>
                        <div style={{ padding: "10px 0px", display: "flex", flexWrap: 'wrap' }}>
                            {
                                phone.map((item) => {
                                    return (
                                        <div className='PhoneNumberLIst'>{item}<button type='button' onClick={() => { RemoverPhoneNumber(item) }}>x</button></div>
                                    )
                                })
                            }


                        </div>

                        <button type='submit' className='ButtonSuccess' >Submit</button>
                    </Box>
                </form>

            </Modal>
        </>
    )
}
