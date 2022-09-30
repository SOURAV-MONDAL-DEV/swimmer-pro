
import './App.css';
import MainBody from './components/MainBody/MainBody';
import Summary from './components/Summary/Summary';
import { useEffect, useState } from 'react';
import Faq from './components/Faq/Faq';

function App() {

  const [swims, setSwims ] = useState([]);
  const [sumTime, setSumTime] = useState(0)


  const loadDataFromLS = () =>{
    const LStime = localStorage.getItem('localTime');
    if(LStime){
    
      setSumTime(parseInt(LStime))
    }
    else{
      return
    }
  }

const setDataToLS = time =>{
  localStorage.setItem('localTime', (sumTime+time))
}

useEffect(()=>{
  loadDataFromLS()
},[])

  useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setSwims(data) )
  },[])
   
  const handleAddToList = (time) =>{
    setSumTime(time+ sumTime);
    setDataToLS(time);
    // console.log(sumTime)
  } 



  
  return (
    <div>
      <div className='allBody'>
        <MainBody swims={swims} handleAddToList={handleAddToList} ></MainBody>
        <Summary sumTime={sumTime} ></Summary>
      </div>
      <Faq></Faq>
    </div>
  );
}

export default App;
