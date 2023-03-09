import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
 
  return (
   <>
    <Navbar  title="TextUtils" ></Navbar>
    <div className='container'><TextForm heading="Enter Text To analyze"></TextForm>
   </div>
   </>
     ); 

}  

export default App;
