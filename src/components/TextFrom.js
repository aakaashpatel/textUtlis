import React, {useState} from "react";

export default function TextFrom(props) {
  const handleUpClick =()=>{
    // console.log("Upper was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleLoClick =()=>{
    // console.log("Upper was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleClearClick =()=>{
    // console.log("Upper was clicked" + text);
    let newtext = '';
    setText(newtext)
  }
  const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value)
  }
  const handleCopy =()=>{
    // console.log("copy");
    let newtext = document.getElementById("myBox");
     newtext.select();
    // newtext.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(newtext.value)
    // console.log(newtext.value);
    // setText(newtext)
  }

  const[text, setText]=useState('')
  return (
          <>
            <div className="container my-4" style={{backgroundColor :props.mode==='light'?'dark':'light'}}>
              <div className="mb-3">
                  <h3>{props.heading}</h3>
                <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
                  id="myBox"
                  rows="7"
                  style={{backgroundColor :props.mode==='white'?'white':'light'}}
                ></textarea>
              </div>
              <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
              <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-1" >
                <h3 style={{color :props.mode==='dark'?'white':'black'}}>Text Summary</h3>
                <p style={{color :props.mode==='dark'?'white':'black'}}>{text.split(" ").length}words and {text.length} characters</p>
                <hr />
                <p style={{color :props.mode==='dark'?'white':'black'}}>{0.008  * text.split(" ").length} Minutes read</p>
                <hr />
            </div>
          </>
  );
}


















