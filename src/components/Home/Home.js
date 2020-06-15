import React from 'react';
import { Button } from 'reactstrap';

import './Home.css';

import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <h1>Your favorite food delivered while coding</h1>
            <Button color='primary' size='lg'>Pizza?</Button>
        </>
    );
};

export default Home;