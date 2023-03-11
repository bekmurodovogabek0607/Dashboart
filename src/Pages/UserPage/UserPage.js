import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
import { useGet } from '../../utils/Hooks'
import { Space, Table, Tag } from 'antd';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Hash',
      dataIndex: 'hash',
      key: 'hash',
    },
   
  ];
 
export const UserPage = () => {
    const {data}=useGet(['user'],'/user')
    
    return (
        <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                      {/* Faqat shu joyi o'zgaradi */}
                      <div className='ControlPageNavbar'>
                        <h1>User</h1>
                        
                    </div>
                    <div>
                    <Table columns={columns} dataSource={data} />
                    </div>
                </div>

            </div>

        </>
    )
}
