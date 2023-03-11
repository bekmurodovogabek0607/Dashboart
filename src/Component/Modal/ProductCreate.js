import React, { useContext, useState } from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Https } from '../../Https';
import { Checkbox } from 'antd';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGet, usePost, useUpdate } from '../../utils/Hooks';
import { toast } from 'react-toastify';
import { Context } from '../../utils/Context';
import { useMutation } from '@tanstack/react-query';
// import Modal from '@mui/material/Modal';
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
export const ProductCreate = ({ openCreate, setOpenCreate }) => {
    const [type, setTupe] = useState()
    const [active, setActive] = useState()
    const [size, setsize] = useState()
    const [gender, setgender] = useState()
    const [color, setcolor] = useState()
    const [price, setprice] = useState()
    const [discount, setdiscount] = useState()
    const [categoryId, setcategoryId] = useState()
    const [name_Uz, setname_Uz] = useState()
    const [name_Ru, setname_Ru] = useState()
    const [name_En, setname_En] = useState()
    const [description_Uz, setdescription_Uz] = useState()
    const [description_Ru, setdescription_Ru] = useState()
    const [description_En, setdescription_En] = useState()
    const [photoId, setImgInformation] = useState()

    const handleCloseCreate = () => setOpenCreate(false);
    const { data } = useGet(['category'], '/category')
    const {refetch}=useGet(['products'],'/products')
    const PostProduct = usePost('/products')
    
    const [age, setAge] = React.useState('');
   
    const handleChange = (event) => {
        setcategoryId(event.target.value);
        setAge(event.target.value)
    };

    function SubmitProduct(e) {
        e.preventDefault()
        console.log(photoId);
        PostProduct.mutate({
            type, active, size, gender, color, price, discount, categoryId, name_Uz, name_Ru, name_En, description_En, description_Uz, description_Ru, photoId
        }, {
            onSuccess: (data) => {
                console.log(data);
                toast.success('Created')
                refetch()
            },
            onError: (err) => {
                console.log(err);
                toast.error('error')
            }
        })
    }

    return (<>

        <Modal
            open={openCreate}
            onClose={handleCloseCreate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={(e) => { SubmitProduct(e) }}>
                    <h1>Create Product</h1>
                    <div className='CreatetUzRuEn'>
                        <TextField onChange={(e) => { setname_Uz(e.target.value) }} required id="outlined-basic" label="Name_Uz" variant="outlined" multiline />
                        <TextField onChange={(e) => { setname_Ru(e.target.value) }} required id="outlined-basic" label="Name_Ru" variant="outlined" multiline />
                        <TextField onChange={(e) => { setname_En(e.target.value) }} required id="outlined-basic" label="Name_Uz" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField onChange={(e) => { setTupe(e.target.value) }} required id="outlined-basic" label="Type" variant="outlined" multiline />
                        <TextField onChange={(e) => { setgender(e.target.value) }} required id="outlined-basic" label="Gender" variant="outlined" multiline />
                        <TextField onChange={(e) => { setcolor(e.target.value) }} required id="outlined-basic" label="Color" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField onChange={(e) => { setprice(Number(e.target.value)) }} required id="outlined-basic" label="Price" variant="outlined" type={'number'} multiline />
                        <TextField onChange={(e) => { setdiscount(Number(e.target.value)) }} required id="outlined-basic" label="Discount" variant="outlined" type={'number'} multiline />
                        <TextField onChange={(e) => { setsize(e.target.value) }} required id="outlined-basic" label="Size" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField onChange={(e) => { setdescription_Uz(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Uz" variant="outlined" multiline />
                        <TextField onChange={(e) => { setdescription_Ru(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Ru" variant="outlined" multiline />
                        <TextField onChange={(e) => { setdescription_En(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Uz" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <div style={{ width: "33%" }}>
                            <Checkbox onChange={(e) => { setActive(e.target.checked) }} defaultChecked='true' >Active</Checkbox>

                        </div>

                        <FormControl sx={{ width: "33%" }}>
                            <InputLabel id="demo-select-small">Category</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Category"
                                onChange={handleChange}
                            >
                                {
                                    data?.data?.map((item, index) => {
                                        return (
                                            <MenuItem value={item.id}>{item.name_Uz}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </FormControl>
                        <div style={{ width: '33%' }}>
                            <Upload

                                name='photo'
                                action={`${Https}upload/upload`}

                                maxCount={1}
                                onChange={(data) => setImgInformation(data.file.response?.id)}


                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </div>

                    </div>
                    <button className='ButtonSuccess'>Create</button>

                </form>
            </Box>
        </Modal>
    </>

    )
}


export const ProductUpdate=({openUpdate,setOpenUpdate})=>{
    const { UpdateItem } = useContext(Context)
    const [type, setTupe] = useState()
    const [active, setActive] = useState()
    const [size, setsize] = useState()
    const [gender, setgender] = useState()
    const [color, setcolor] = useState()
    const [price, setprice] = useState()
    const [discount, setdiscount] = useState()
    const [categoryId, setcategoryId] = useState()
    const [name_Uz, setname_Uz] = useState()
    const [name_Ru, setname_Ru] = useState()
    const [name_En, setname_En] = useState()
    const [description_Uz, setdescription_Uz] = useState()
    const [description_Ru, setdescription_Ru] = useState()
    const [description_En, setdescription_En] = useState()
    const [photoId, setImgInformation] = useState()
    console.log(UpdateItem);
    const handleCloseUpdate = () => setOpenUpdate(false);
    const { data } = useGet(['category'], '/category')
    const {refetch}=useGet(['products'],'/products')
    const UpdateProduct = useUpdate(`/products/${UpdateItem?.id}`)
    
    const [age, setAge] = React.useState('');
   
    const handleChange = (event) => {
        setcategoryId(event.target.value);
        setAge(event.target.value)
    };

    function SubmitProduct(e) {
        e.preventDefault()
        console.log(photoId);
        UpdateProduct.mutate({
            type, active, size, gender, color, price, discount, categoryId, name_Uz, name_Ru, name_En, description_En, description_Uz, description_Ru, photoId
        },{
            onSuccess: (data) => {
                console.log(data);
                toast.success('Updated')
                refetch()
            },
            onError: (err) => {
                console.log(err);
                toast.error('error')
            }
        })
    }

    return (<>

        <Modal
            open={openUpdate}
            onClose={handleCloseUpdate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={(e) => { SubmitProduct(e) }}>
                    <h1>Create Product</h1>
                    <div className='CreatetUzRuEn'>
                        <TextField value={name_Uz} defaultValue={UpdateItem?.name_Uz} onChange={(e) => { setname_Uz(e.target.value) }} required id="outlined-basic" label="Name_Uz" variant="outlined" multiline />
                        <TextField value={name_Ru} defaultValue={UpdateItem?.name_Ru} onChange={(e) => { setname_Ru(e.target.value) }} required id="outlined-basic" label="Name_Ru" variant="outlined" multiline />
                        <TextField value={name_En} defaultValue={UpdateItem?.name_En} onChange={(e) => { setname_En(e.target.value) }} required id="outlined-basic" label="Name_Uz" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField value={type} defaultValue={UpdateItem?.type} onChange={(e) => { setTupe(e.target.value) }} required id="outlined-basic" label="Type" variant="outlined" multiline />
                        <TextField value={gender} defaultValue={UpdateItem?.gender} onChange={(e) => { setgender(e.target.value) }} required id="outlined-basic" label="Gender" variant="outlined" multiline />
                        <TextField value={color} defaultValue={UpdateItem?.color} onChange={(e) => { setcolor(e.target.value) }} required id="outlined-basic" label="Color" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField value={price} defaultValue={UpdateItem?.price}  onChange={(e) => { setprice(Number(e.target.value)) }} required id="outlined-basic" label="Price" variant="outlined" type={'number'} multiline />
                        <TextField value={discount} defaultValue={UpdateItem?.discount} onChange={(e) => { setdiscount(Number(e.target.value)) }} required id="outlined-basic" label="Discount" variant="outlined" type={'number'} multiline />
                        <TextField value={size} defaultValue={UpdateItem?.size} onChange={(e) => { setsize(e.target.value) }} required id="outlined-basic" label="Size" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <TextField value={description_Uz} defaultValue={UpdateItem?.description_Uz} onChange={(e) => { setdescription_Uz(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Uz" variant="outlined" multiline />
                        <TextField value={description_Ru} defaultValue={UpdateItem?.description_Ru} onChange={(e) => { setdescription_Ru(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Ru" variant="outlined" multiline />
                        <TextField value={description_En} defaultValue={UpdateItem?.description_En} onChange={(e) => { setdescription_En(e.target.value) }} rows={4} required id="outlined-basic" label="Desc_Uz" variant="outlined" multiline />
                    </div>
                    <div className='CreatetUzRuEn'>
                        <div style={{ width: "33%" }}>
                            <Checkbox  onChange={(e) => { setActive(e.target.checked) }} defaultChecked={UpdateItem?.active} >Active</Checkbox>

                        </div>

                        <FormControl sx={{ width: "33%" }}>
                            <InputLabel id="demo-select-small">Category</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Category"
                                defaultValue={UpdateItem?.Category?.name_Uz}
                                onChange={handleChange}
                            >
                                {
                                    data?.data?.map((item, index) => {
                                        return (
                                            <MenuItem value={item.id}>{item.name_Uz}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </FormControl>
                        <div style={{ width: '33%' }}>
                            <Upload

                                name='photo'
                                action={`${Https}upload/upload`}

                                maxCount={1}
                                onChange={(data) => setImgInformation(data.file.response?.id)}


                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </div>

                    </div>
                    <button className='ButtonSuccess'>Create</button>

                </form>
            </Box>
        </Modal>
    </>

    )
}