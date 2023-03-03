import React,{useState} from 'react'



export default function (props) {
  
    
    
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

  const handleBase36To10 = (e,number, initial_base, change_base) =>{
    e.preventDefault();
    if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
    return 'Base between 2 and 36';
   
    let newText =  parseInt(number + '', initial_base)
    .toString(change_base);

    
  
    setText(newText);

    

  
   
  // //  let newTExt1 = newText.toString();
  //  console.log(newText);
  //  setText(newText);

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
  
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>ClearText</button>
  <button className="btn btn-primary mx-2" onClick={handleBase64Decode}>Base 64 Decode</button>
  <button className="btn btn-primary mx-2" onClick={handleBase64Encode}>Base 64 Encode</button>
  <button className="btn btn-primary mx-2" onClick={handleBase36To10}>Base 36To10</button>
  
</form>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.08 * text.split(" ").length }</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
