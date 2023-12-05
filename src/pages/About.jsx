import React, { memo } from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{ my: 15, textAlign: 'center', p: 2, '& h4': { fontWeight: 'bold', my: 2, fontSize: '1.3rem' }, '& p': { textAlign: 'justify' }, '@media (max-width:600px)': { mt: 0, '& h4': { fontSize: '1.5rem' } } }} >
                <Typography variant='h4'>
                    Welcome To My Resturant
                </Typography>
                <p> Welcome to The Culinary Haven, a gastronomic delight nestled in the heart of the city. Our restaurant is a haven for food enthusiasts seeking a blend of exquisite flavors and a cozy ambiance. </p>
                <p> Step into a warm and inviting atmosphere that combines modern elegance with a touch of rustic charm. The ambient lighting and stylish decor create the perfect setting for a romantic dinner, a family celebration, or a casual get-together with friends.</p>
                <b>Exceptional Service:</b>
                <p>Our attentive and friendly staff is dedicated to making your dining experience memorable. Whether you need recommendations, have dietary preferences, or want a personalized dish, we're here to exceed your expectations.</p>
            </Box>
        </Layout>
    )
}

export default memo(About)