import React from 'react';

const Swims = (props) => {
 const {id, title, image, age, time} = props.swim;

    return (
        <div className='pr'>
            <h1>{title}</h1>
            
        </div>
    );
};

export default Swims;