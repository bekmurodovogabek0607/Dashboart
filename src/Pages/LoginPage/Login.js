import React, { useContext } from 'react'
import './loginStyle.css'
import '../../Style/AllStyle.css'
import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingSpinner } from '../../Component/Spinner/loading';
import { Context } from '../../utils/Context';
import { Navigate, useNavigate } from 'react-router-dom';


const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
export const Login = () => {
    const {handleOpenLoading,handleCloseLoading,setLoginParol}=useContext(Context)
    const nav=useNavigate()
    
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
    function Login(e) {
        e.preventDefault()
       // handleOpenLoading()
        nav(-1)
    }
    return (
        <div className='Login'>

            <div>
                <form onSubmit={(e) => { Login(e) }}>
                    <h1>Login</h1>
                    <div>
                        <label>Tel nomer</label>
                        <InputMask  required {...props} mask="+\9\9\8 99 999 99 99" maskChar=" " className='inputmask' />
                    </div>
                    <div>
                        <label>Parol</label>
                        <input onChange={(e)=>{setLoginParol(e.target.value)}} required type={'password'} className='inputmask'></input>
                    </div>
                    <button className='ButtonSuccess'>Kirish</button>
                  
                  
                </form>
                





            </div>
        </div>
    )
}
