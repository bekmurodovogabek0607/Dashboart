import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
export const Information = () => {
  return (
    <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                    {/* Faqat shu joyi o'zgaradi */}
                    <h1>Information</h1>
                </div>

            </div>

        </>
  )
}
