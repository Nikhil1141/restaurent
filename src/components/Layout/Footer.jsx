import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
                <Box sx={{ my: 3, '& svg': { fontSize: '50px', cursor: "pointer", mr: 2 }, '& svg:hover': { color: 'gold', transform: 'translateX(5px)', transition: 'all 400px' } }} >
                    <InstagramIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                </Box>
                <Typography variant='h5' sx={{ '@media (man-width:600px)': { fontSize: '1rem' } }} >All Rights Reserved &copy; Nikhil </Typography>
            </Box>
        </>
    )
}

export default memo(Footer)