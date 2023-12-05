import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/Headerstyle.css'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
            <Typography color={'gold'} variant='h6' component='div' sx={{ flexGrow: 1, my: 2 }} ><FoodBankIcon /> Fire Up🔥 The Grill </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li>
                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'}>Cart(2)</NavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle} >
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'gold'} variant='h6' component='div' sx={{ flexGrow: 1 }} ><FoodBankIcon /> Fire Up🔥 The Grill </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/cart'}>Cart(2)</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav' >
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' } }} >{drawer}</Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}

export default memo(Header)

