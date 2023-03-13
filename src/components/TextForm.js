import React,{useState} from 'react'




export default function TextForm(props) {
  
    
    
    const handleUpClick = (e)=>{
        e.preventDefault();

    //console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted into UpperCase","success")
   
    
    }

    
  const handleLowerClick = (e) =>{
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted into lower case","success");
    
  }

  const handleClear = (e) =>{
    e.preventDefault();
   let newText = '';
   setText(newText);
   props.showAlert(" data cleared","success")

  }
  
  const handleBase64Decode = (e) =>{
   
    e.preventDefault();
    let newText = atob(text);
    setText(newText);
    props.showAlert("converted into base64 decode","success")

  }
  const handleBase64Encode = (e) =>{
   
    e.preventDefault();
    let newText = btoa(text);
    setText(newText);
    props.showAlert("converted into base64 encode","success")
  }

  const handleBase36To10 = (e) =>{
    e.preventDefault();
    let newText =  parseInt(text, 36);
    setText(newText);
    props.showAlert("converted Base 36 To 10 ","success")
     console.log('In');
  }

  const handleBase16To10 = (e) =>{
    e.preventDefault();
    let newText = parseInt(text,16);
    setText(newText);
    props.showAlert("converted Base 16 To 10","success")
  }

  const handleBase32To10 = (e) =>{
    e.preventDefault();
    let newText =parseInt(text,32);
    setText(newText);
    props.showAlert("converted Base 32 To 10","success")
  }

  const handleCopy = (e) =>{
    e.preventDefault();
    let text = document.getElementById("myBox");
    console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("data Copyied","success")
   // setText(newText);

  }


  const handleExtraSpaces = (e) =>{
    e.preventDefault();
    let newText = text.split(/[ ]+/);
    console.log(newText);
   
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success")

  }

    const handleOnChange = (e)=>{
      console.log("on change");
       setText(e.target.value);
    }



    const[text,setText] = useState('');

  return (
   <>
   
    <div className='container' style={{color: props.mode ==='dark'?'#FFFFFF':'#042743'}}>
       
            <h2 >{props.heading} - </h2>
  <div className="mb-3">
    <label htmlFor="myBox" className="Form-label"></label>
    <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white',color:props.mode==='dark'?'#FFFFFF':'#042743'}}  className="form-control" id="myBox" rows='8' />
   
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

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.08 * text.split(" ").length }</p> */}
      <h3 >preview</h3>
      {/* <p>{text}</p> */}

      {text.length>0?text:"Enter Something in the textbox to preview it here"}
    </div>
    </>
  )
}
