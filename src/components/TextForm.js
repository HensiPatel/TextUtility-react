import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase eas clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!" , "success");
    }
    const handleLoClick = ()=>{
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("converted to lowercase!" , "success");
   }
   const handleClearClick = ()=>{
    let newText = ("");
    setText(newText)
  }
  const handleCopy = ()=>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
  // document.getSelection().removeAllRanges();
    props.showAlert("text is copied to clipboard" , "success");
  }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

    const handleOnChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");


  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#0c0946'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light' ? 'white' : '#0c0946',color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#0c0946'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((elmt)=>{return elmt.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((elmt)=>{return elmt.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Priview'}</p>
    </div>
    </>
  )
}
