import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/TextFrom';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1000);
  }
      
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey';
      // showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      // showAlert("Light mode has been enabled","success")
    
    }
  }
  return (
    <>
    <Navbar title="Text" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textfrom heading="ENTER THE TEXT TO ANALYZE" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;