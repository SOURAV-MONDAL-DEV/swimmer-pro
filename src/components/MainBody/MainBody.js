import React from 'react';
import Header from '../Header/Header';
import Swims from '../Swims/Swims';
import './MainBody.css'

const MainBody = ({swims}) => {

    console.log(swims)
    
    return (
        <div className='MainBody'>
            <Header></Header>
            <Swims swims={swims} ></Swims>
        </div>
    );
};

export default MainBody;