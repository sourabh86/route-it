import React, {useState,useEffect} from 'react';
import GameWrapper from './components/GameWrapper';
import { useInterval } from './hooks/useInterval';

import './App.css';
import PlayArea from './components/PlayArea';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [speed,setSpeed] = useState(150);
  // const [dummyCount,setDummyCount] = useState(0);
  // useInterval(()=>{
  //   setDummyCount(dummyCount+1);
  // },speed);

  return (
    <div className="App">
      <PlayArea />
      
    </div>
  );
}

export default App;
