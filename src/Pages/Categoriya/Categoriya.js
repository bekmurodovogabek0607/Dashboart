import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { NavbarLeft } from '../../Component/NavbarLeft/NavbarLeft'
import '../../Style/AllStyle.css'
export const Categoriya = () => {
    return (
        <>
            <Navbar />
            <div className='GlavniSketel'>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                    <h1>Categoriya</h1>
                </div>

            </div>

        </>
    )
}
