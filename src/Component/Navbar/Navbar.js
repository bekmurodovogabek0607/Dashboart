import React from 'react'
import './navbar.css'
import Avatar from '@mui/material/Avatar';


import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';



import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavbarLeft } from '../NavbarLeft/NavbarLeft';

const settings = ['Profile', 'Account',  'Logout'];
export const Navbar = () => {
  
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
   
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  

  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <>
         <div className='Navbar'>
            <h1>Logo</h1>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{backgroundColor:"red"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
        </div>
        
        </>
       
    )
}
