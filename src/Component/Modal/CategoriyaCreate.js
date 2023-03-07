import React from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Https } from '../../Https';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};
// const fileList = [
//     // {
//     //   uid: '0',
//     //   name: 'xxx.png',
//     //   status: 'uploading',
//     //   percent: 33,
//     // },
//     // {
//     //   uid: '-1',
//     //   name: 'yyy.png',
//     //   status: 'done',
//     //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     // },
//     // {
//     //   uid: '-2',
//     //   name: 'zzz.png',
//     //   status: 'error',
//     // },
//   ];
export const CategoryCreate = ({ openCreate, setOpenCreate }) => {
    const handleCloseCreate = () => setOpenCreate(false);
    const fileList = {
       
    }
    return (<>

        <Modal
            open={openCreate}
            onClose={handleCloseCreate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h1>Create Category</h1>
                <div className='CreatetUzRuEn'>
                    <TextField id="outlined-basic" label="Name_Uz" variant="outlined" />
                    <TextField id="outlined-basic" label="Name_Ru" variant="outlined" />
                    <TextField id="outlined-basic" label="Name_Uz" variant="outlined" />
                </div>
                <Upload
                    action={`${Https}upload/upload`}
                    listType="picture"
                    // defaultFileList={[fileList]}
                    onChange={(e)=>{console.log(e);}}
                    maxCount={1}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <br />
                <br />
                {/* <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    defaultFileList={[...fileList]}
                    className="upload-list-inline"
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload> */}


                <button className='ButtonSuccess'>Create</button>
            </Box>
        </Modal>
    </>

    )
}
