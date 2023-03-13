import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null); 

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }



  const toggleMode = (e) =>{
   
    if(mode === 'light'){
      setMode( 'dark') ;
      document.body.style.backgroundColor ='#8d8c2f';
      showAlert("Dark mode enabled ","success")

      }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled ","success")
    }

  }
  return (  
   <>
      <Router>
    <Navbar  title="TextUtils" mode= {mode} toggleMode ={toggleMode} ></Navbar>
    <Alert alert={alert} />
    <div className='container'>
    {/* <TextForm showAlert={showAlert} heading="Enter Text To analyze"></TextForm>
    <About heading ="About us"></About> */}

 
         <Routes>
        <Route exact path ="/" element={<TextForm showAlert={showAlert} heading="Enter Text To analyze"></TextForm>}></Route>
         <Route exact path="/about" element ={<About heading ="About us"></About>}></Route> 
        

      </Routes>
        </div>
    </Router>
  
   </>
     ); 

}  

export default App;
