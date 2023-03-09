

import React, { createContext, useState } from 'react'
export const Context=createContext()
export const GlobalPrivader = ({ children }) => {
    const [LoginParol,setLoginParol]=useState()
    const [openLoading, setOpenLoading] = React.useState(false);
    const handleOpenLoading = () => setOpenLoading(true);
    const handleCloseLoading = () => setOpenLoading(false);
    const [DeleteId,setDeleteId]=useState()
    const [UpdateItem,setUpdateItem]=useState()
  return (
    <Context.Provider value={{
        LoginParol,
        setLoginParol,
        openLoading,
        handleOpenLoading,
        handleCloseLoading,
        setDeleteId,
        DeleteId,
        setUpdateItem,
        UpdateItem
    }}>
        {children}
    </Context.Provider>
  )
}
