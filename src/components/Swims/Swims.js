import React from 'react';
import './Swims.css'

const Swims = (props) => {
 const {id, title, image, age, time} = props.swim;

    return (
        <div className='swims'>
           <img src={image} alt="img" ></img> 
           <div className='info' >
            <h3>{title}</h3>
            <h5>For Age: {age} years</h5>
            <h5>Time requared: {time} Minute</h5>
           </div>
           <button>Add to list</button>
        </div>
    );
};

export default Swims;