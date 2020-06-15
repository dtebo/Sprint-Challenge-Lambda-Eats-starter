import React from 'react';
import { Button } from 'reactstrap';

import './Home.css';

const Home = () => {
    return (
        <>
            <section className='cta-container'>
                <h1>Your favorite food delivered while coding</h1>
                <Button color='primary' size='lg'>Pizza?</Button>
            </section>
            <section className='primary-container'>
                <div className='section-title'>
                    <h2>Food Delivery in Gotham City</h2>
                </div>
                <div className='restaurant'>
                    <img alt='' src='' />
                    <h3>McDonald's</h3>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div className='delivery-info-row'>
                        <p className='info'>20-30 Min</p>
                        <p className='info'>$5.99 Delivery Fee</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;