import React, { memo, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { MenuList } from '../data/data';
import '../styles/Menustyle.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import toast, { Toaster } from 'react-hot-toast';


const MenuDetails = () => {
    const { item } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        const menuItemDetails = MenuList.find((menu) => menu.name === decodeURIComponent(item));
        if (menuItemDetails) {
            setItemDetails(menuItemDetails);
        } else {
            setItemDetails(null);
        }
    }, [item]);
    const notify = () => toast.success('Item Added To Cart');


    return (
        <Layout>
            <Link to={`/menu`}><ArrowCircleLeftIcon sx={{ color: 'black', m: 2, width: '40px', height: '40px' }} /></Link>
            {itemDetails ? (
                <div className='menucontent'>
                    <img className='imgg' src={itemDetails.image} alt={itemDetails.name} />
                    <div className='inner-menucontent'>
                        <h1>{itemDetails.name}</h1>
                        <p id='p1'>{itemDetails.description}</p>
                        <p id='p2'> <label>Price:</label> Rs.{itemDetails.price}/.</p>
                        <button onClick={notify} className='btn'>Add To Cart</button><Toaster />
                    </div>
                </div>
            ) : (
                <p>Item details not found.</p>
            )}
        </Layout>
    );
};

export default memo(MenuDetails);
