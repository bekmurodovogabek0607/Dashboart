import React from 'react'
import { CategoryCreate } from '../../Component/Modal/CategoriyaCreate'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import { Tablee } from '../../Component/Table/Table'
import { TableCategory } from '../../Component/Table/TableCategory'
import { Https } from '../../Https'
import '../../Style/AllStyle.css'
import { useDelete, useGet } from '../../utils/Hooks'
export const Categoriya = () => {
    const [openCreate, setOpenCreate] = React.useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const { data, isSuccess,refetch } = useGet(['category'], '/category')
   
    const columns = ['Img', 'Name'];
    console.log(data);
    const rows = []
    if (isSuccess) {
        for (const i of data.data) {
            console.log(Https+i?.photo?.path);
            
            rows.push(
                {
                    Id: i?.id,
                    Name: i?.name_Uz,
                    photoId: i?.photoId,
                    ImgPath: i?.photo?.path
                })
        }
    }
    return (
        <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                    <div className='ControlPageNavbar'>
                        <h1>Category</h1>
                        <div>
                            <button onClick={()=>{handleOpenCreate()}} className='ButtonCreate'>Create</button>
                        </div>
                    </div>

                    <TableCategory columns={columns} rows={rows} refetch={refetch}/>
                </div>

            </div>
         <CategoryCreate openCreate={openCreate} setOpenCreate={setOpenCreate}/>
        </>
    )
}
