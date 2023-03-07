import React from 'react'
import { DataGrid, DataGridPage } from '../../Component/DataGrid/DataGrid'
import { ProductCreate } from '../../Component/Modal/ProductCreate'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import { Tablee } from '../../Component/Table/Table'
import '../../Style/AllStyle.css'
import { useGet } from '../../utils/Hooks'
export const Product = () => {
    const [openCreate, setOpenCreate] = React.useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const {data,isSuccess}=useGet(['products'],'/products')
    console.log(data);
    const columns = ['Img','Name','Price','Discount','Active','Color','Decs'];
    const rows=[]
    if(isSuccess){
        for (const i of data.data) {
            console.log(i.active);
            rows.push( { Id: i.id, Name: i.name_Uz,  Price: i.price,Discount:i.discount ,Active:i.active,Color:i.color,Decs:i.description_Uz,Img:i.photoId})
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
                    <h1>Product</h1>
                    <div>
                        <button onClick={()=>{handleOpenCreate()}} className='ButtonCreate'>Create</button>
                    </div>
                    </div>
                  
                    <Tablee columns={columns} rows={rows} />
                </div>

            </div>
            <ProductCreate openCreate={openCreate} setOpenCreate={setOpenCreate}/>

        </>
  )
}
