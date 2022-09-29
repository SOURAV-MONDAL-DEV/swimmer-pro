import React from 'react';
import Header from '../Header/Header';
import Swims from '../Swims/Swims';
import './MainBody.css'

const MainBody = ({swims , handleAddToList}) => {

    return (
        <div className='MainBody'>
            <Header></Header>
            <div className='swims-container'>
                {
                    swims.map(swim =><Swims
                        key={swim.id}
                        swim={swim}
                        handleAddToList={handleAddToList}
                    ></Swims> )
                }
            </div>
            
        </div>
    );
};

export default MainBody;