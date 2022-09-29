
import './App.css';
import MainBody from './components/MainBody/MainBody';
import Summary from './components/Summary/Summary';
import { useEffect, useState } from 'react';

function App() {

  const [swims, setSwims ] = useState([]);

  useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setSwims(data) )
  },[])

  const handleAddToList = (time) =>{
    console.log(time)
  }
  
  return (
    <div className='allBody'>
      <MainBody swims={swims} handleAddToList={handleAddToList} ></MainBody>
      <Summary></Summary>
      
    </div>
  );
}

export default App;
