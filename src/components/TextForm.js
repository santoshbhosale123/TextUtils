import React,{useState} from 'react'




export default function TextForm(props) {
  
    
    
    const handleUpClick = (e)=>{
        e.preventDefault();

    //console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    }

    
  const handleLowerClick = (e) =>{
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = (e) =>{
    e.preventDefault();
   let newText = '';
   setText(newText);

  }
  
  const handleBase64Decode = (e) =>{
   
    e.preventDefault();
    let newText = atob(text);
    setText(newText);

  }
  const handleBase64Encode = (e) =>{
   
    e.preventDefault();
    let newText = btoa(text);
    setText(newText);

  }

  const handleBase36To10 = (e) =>{
    e.preventDefault();
    let newText =  parseInt(text, 36);
    setText(newText);
     console.log('In');
  }

  const handleBase16To10 = (e) =>{
    e.preventDefault();
    let newText = parseInt(text,16);
    setText(newText);
  }

  const handleBase32To10 = (e) =>{
    e.preventDefault();
    let newText =parseInt(text,32);
    setText(newText);
  }

  const handleCopy = (e) =>{
    e.preventDefault();
    let text = document.getElementById("myBox");
    console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
   // setText(newText);

  }


  const handleExtraSpaces = (e) =>{
    e.preventDefault();
    let newText = text.split(/[ ]+/);
    console.log(newText);
   
    setText(newText.join(" "));

  }

    const handleOnChange = (e)=>{
      console.log("on change");
       setText(e.target.value);
    }



    const[text,setText] = useState('');

  return (
   <>
    <div className='container'>
        <form>
            <h2>{props.heading} - </h2>
  <div className="mb-3">
    <label htmlFor="myBox" className="Form-label"></label>
    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows='6' />
   
  </div>
  <div className='test'>
  <button className="btn btn-primary mx-2" onClick={handleClear}>ClearText</button>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleBase64Decode}>Base 64 Decode</button>
  <button className="btn btn-primary mx-2" onClick={handleBase64Encode}>Base 64 Encode</button>
  <button className="btn btn-primary mx-2" onClick={handleBase36To10}>Base 36To10</button>
  <button className="btn btn-primary mx-2" onClick={handleBase16To10}>Base 16To10</button>
  <button className="btn btn-primary m-2" onClick={handleBase32To10}>Base 32To10(ForIpConv)</button>
  <button className="btn btn-primary m-2" onClick={handleCopy}>copyToClickBoard</button>
  <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
  </div>
</form>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.08 * text.split(" ").length }</p> */}
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
