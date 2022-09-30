import React, { useState } from 'react';
import './Summary.css'

const Summary = ({sumTime}) => {
    const [Break, setBreak] = useState([])

    return (
        <div className='summary'>
            <div className='myInfo'>
                <img src='image/myPhoto.jpg' alt=''></img>
                <div className='myText'>
                    <h3>SOURAV MONDAL</h3>
                    <p>Pirojpur, BD</p>
                </div>
            </div>
            <div className='myDetails sumInfo'>
                <p>Weight: <strong>57</strong>KG</p>
                <p>Hight: <strong>5'5"</strong></p>
                <p>Age: <strong>21</strong>Years</p>

            </div>
            <h3>Add A Break</h3>
            <div className='btns sumInfo'>
                <button onClick={()=>setBreak(5)} className='btn'><span>5</span>Min</button>
                <button onClick={()=>setBreak(10)} className='btn'><span>10</span>Min</button>
                <button onClick={()=>setBreak(15)} className='btn'><span>15</span>Min</button>
                <button onClick={()=>setBreak(20)} className='btn'><span>20</span>Min</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='sumInfo'>
                <p><strong>Exercise time: </strong><span>{sumTime} Minutes</span></p>
            </div>
            <div className='sumInfo'>
                <p><strong>Break time: </strong><span>{Break} Minutes</span></p>
            </div>

            <div className='btndiv' ><button className='btnCompleate' >Activity Complete</button></div>
            
        </div>
    );
};

export default Summary;