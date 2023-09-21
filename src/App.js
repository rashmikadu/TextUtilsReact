
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
 const toggleSwitch = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>

      <Navbar title="TextUtil sdf" aboutText="About" mode={mode} toggleSwitch={toggleSwitch}/>
      <div className="container-fluid my-3">
        <TextForm heading="Enter the text to analyse" />
        {/* <About/> */}
        <div className="row">
        
        {/* <div className="col-md-9"><PassengerDetails mode={mode} /></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
