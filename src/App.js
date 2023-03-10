import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';


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
    <Navbar  title="TextUtils" mode= {mode} toggleMode ={toggleMode} ></Navbar>
    <Alert alert={alert} />
    <div className='container'>
    <TextForm showAlert={showAlert} heading="Enter Text To analyze"></TextForm>
   </div>
   </>
     ); 

}  

export default App;
