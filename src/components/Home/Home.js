import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <>
            <section className='cta-container'>
                <h1>Your favorite food delivered while coding</h1>
                <NavLink to='/Pizza'><Button color='primary' size='lg'>Pizza?</Button></NavLink>
            </section>
            <section className='primary-container'>
                <div className='section-title'>
                    <h2>Food Delivery in Gotham City</h2>
                </div>
                <div className='restaurant-row'>
                    <div className='restaurant'>
                        <img alt='' src='' />
                        <h3>McDonald's</h3>
                        <p>$ - American - Fast Food - Burgers</p>
                        <div className='delivery-info-row'>
                            <p className='info'>20-30 Min</p>
                            <p className='info'>$5.99 Delivery Fee</p>
                        </div>
                    </div>
                    <div className='restaurant'>
                        <img alt='' src='' />
                        <h3>sweetgreen</h3>
                        <p>$ - Healthy - Salads</p>
                        <div className='delivery-info-row'>
                            <p className='info'>30-45 Min</p>
                            <p className='info'>$4.99 Delivery Fee</p>
                        </div>
                    </div>
                    <div className='restaurant'>
                        <img alt='' src='' />
                        <h3>Starbucks</h3>
                        <p>$ - Cafe - Coffee &amp; Tea - Breakfast and Brunch</p>
                        <div className='delivery-info-row'>
                            <p className='info'>10-20 Min</p>
                            <p className='info'>$3.99 Delivery Fee</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;