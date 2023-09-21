import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("click on btn"  + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = ()=>{
        let newText = document.getElementById('my-box');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="my-box" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>The word count is {text.split(' ').length},the text character is: {text.length}</p>
            <p>{0.008 * text.split(' ').length} minuts to read</p>
            <p>Preview : </p>
            <p>{text.length >0 ? text : 'Please enter something on above textarea'}</p>

        </div>
        </>
    )
}
