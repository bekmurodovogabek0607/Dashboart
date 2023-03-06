import React from 'react'
import { Link } from 'react-router-dom'
import './navbarleft.css'
export const NavbarLeft = () => {
    const playlist = [{ name: "User", path: '/' }, { name: "Product", path: '/product' }, { name: "Category", path: '/catgory' }, { name: "Message", path: '/message' }, { name: "information", path: '/information' },{ name: "Setting", path: '/setting' },]
    function ActibeButton(id) {
        console.log(id);
       for (const i of playlist) {
            if(i.name==id){
                document.getElementById(id).classList.add('ActibeButton')
            }
            else{
                document.getElementById(i.name).classList.remove('ActibeButton')
            }
        }

    }
    return (
        <div className='NavbarLeft'>
            <ul>
                {
                    playlist?.map((item, index) => {
                        return (
                            <Link style={{ listStyle: "none", textDecoration: "none" }} key={index} to={item.path}><li onClick={() => { ActibeButton(item.name);ActibeButton(item.name) }} id={item.name}>{item.name}</li></Link>
                        )
                    })
                }

            </ul>


        </div>
    )
}
