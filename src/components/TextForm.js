import React,{useState} from 'react'

export default function (props) {
  
    
    
    const handleUpClick = (e)=>{
        e.preventDefault();

    //console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    }

    const handleOnChange = (e)=>{
      console.log("on change");
       setText(e.target.value);
    }

    const[text,setText] = useState('enter text here');

  return (
   
    <div>
        <form>
            <h2>{props.heading} - </h2>
  <div className="mb-3">
    <label htmlFor="myBox" className="Form-label"></label>
    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows='6' />
   
  </div>
  
  <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
</form>
    </div>
   
  )
}
