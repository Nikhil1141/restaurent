import React, { memo } from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'
import { Link } from 'react-router-dom'
import '../styles/Menustyle.css'
import toast, { Toaster } from 'react-hot-toast';

const Menu = () => {
    const notify = () => toast.success('Item Added To Cart');
    return (
        <Layout>
            <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "center" }}>
                {MenuList.map((item, index) => (
                    <Card key={index} sx={{ maxWidth: '390px', display: 'flex', m: 2 }}>
                        <CardActionArea>
                            <CardMedia sx={{ minHeight: '400px' }} component='img' src={item.image} alt={item.name} />
                            <CardContent>
                                <Typography variant='h5' gutterBottom component='div' >
                                    {item.name}
                                </Typography>
                                <Typography variant='body2' >
                                    {item.description}
                                </Typography>
                                <div className='addmore'>
                                    <Link to={`/menu/${item.name}`} ><button className='btn'>More Details</button></Link>
                                    <button onClick={notify} className='btn'>Add To Cart</button><Toaster />
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    )
}

export default memo(Menu)