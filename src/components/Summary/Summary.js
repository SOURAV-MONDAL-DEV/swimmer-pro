import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div className='summary'>
            <div className='myInfo'>
                <img src='image/myPhoto.jpg' alt=''></img>
                <div className='myText'>
                    <h3>SOURAV MONDAL</h3>
                    <p>Pirojpur, BD</p>
                </div>
            </div>
            <div>

            </div>
            <h3>Add A Break</h3>
            <div className='btns'>
                <button className='btn'><span>5</span>Min</button>
                <button className='btn'><span>5</span>Min</button>
                <button className='btn'><span>5</span>Min</button>
                <button className='btn'><span>5</span>Min</button>
            </div>
            <h3>Exercise Details</h3>
            <div>
                <p><strong>Exercise time: </strong><span>200 seconds</span></p>
            </div>
            <div>
                <p><strong>Break time: </strong><span>5 mins</span></p>
            </div>
            
        </div>
    );
};

export default Summary;