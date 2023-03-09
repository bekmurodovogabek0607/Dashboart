import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
import { useGet } from '../../utils/Hooks'
export const UserPage = () => {
    const {data}=useGet(['user'],'/user')
    console.log(data);
    return (
        <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                      {/* Faqat shu joyi o'zgaradi */}
                    <h1>User</h1>
                </div>

            </div>

        </>
    )
}
