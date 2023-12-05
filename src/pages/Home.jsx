import React, { memo } from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/Homestyle.css'

const Home = () => {
    return (
        <Layout>
            <div className='home' style={{ backgroundImage: `url(${Banner})` }} >
                <div className='headerContainer'>
                    <h1>Food website</h1>
                    <p>Best food</p>
                    <Link to='/menu' >
                        <button>ORDER NOW</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default memo(Home)