import React from 'react';
import Header from '../Header/Header';
import Swims from '../Swims/Swims';
import './MainBody.css'

const MainBody = ({swims}) => {


    return (
        <div className='MainBody'>
            <Header></Header>
            <div>
                {
                    swims.map(swim =><Swims
                        key={swim.id}
                        swim={swim}
                    ></Swims> )
                }
            </div>
            
        </div>
    );
};

export default MainBody;