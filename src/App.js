import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const changeMode = ()=>{
if (mode === 'light') {
  setMode ('dark')
} 
else {
  setMode ('light')
}
  }
  return (
    <>
    <Navbar tittle = "TextUtills" mode= {mode} changeMode = {changeMode}/>
    <div className = "container">
    
          <Form heading = "Enter the text" mode= {mode}/>
         
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
