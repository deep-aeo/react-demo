import React, { useState } from 'react'


function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleUpClick = () => {
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Coverted to uppercase:", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.trim().split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
