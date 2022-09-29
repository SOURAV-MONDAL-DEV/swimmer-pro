import React from 'react';
import Header from '../Header/Header';
import Swims from '../Swims/Swims';
import './MainBody.css'

const MainBody = () => {
    
    return (
        <div className='MainBody'>
            <Header></Header>
            <Swims></Swims>
        </div>
    );
};

export default MainBody;