import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
// import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
                <Toolbar>
                    <NavLink to="/" style={{color:'white'}}>
                    <Typography><StoreMallDirectoryTwoToneIcon />
                    </Typography></NavLink>
                    <Tabs textColor="inherit" sx={{ml:"auto"}} indicatorColor="primary" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add product" />
                        <Tab LinkComponent={NavLink} to="/stores" label="Products" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
