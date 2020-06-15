import React from 'react';
import { Button } from 'reactstrap';

import './Home.css';

const Home = () => {
    return (
        <>
            <div className='cta-container'>
                <h1>Your favorite food delivered while coding</h1>
                <Button color='primary' size='lg'>Pizza?</Button>
            </div>
        </>
    );
};

export default Home;