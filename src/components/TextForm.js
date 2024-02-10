import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick=()=>{
        console.log(text);
        let newText=text.toUpperCase(); 
        setText(newText);
        props.showAlert('Uppercase', 'success');
    }
    const handleLowClick=()=>{
        console.log(text);
        let newText=text.toLowerCase(); 
        setText(newText);
        props.showAlert('Lowercase', 'success');
    }
    const handleClrClick=()=>{
        setText("");
        props.showAlert('Text cleared', 'success');
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied', 'success');
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed extra spaces', 'success');
    }
    const handleBoldClick=()=>{
        setIsBold(!isBold);
    }
    const handleItalicClick=()=>{
        setIsItalic(!isItalic);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const[text, setText]= useState("Enter Text Here!");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode} `} value={text} onChange={handleOnChange}  id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleUpClick}>ConvertToUppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1 `} onClick={handleLowClick}>ConvertToLowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleClrClick}>Clear</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleExtraSpace}>RemoveExtraSpaces</button>
        </div>
        <div className="container my-3 text-center" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary : </h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <p>{text.split("\n").filter((element)=>{return element.length!==0}).length} Paragraphs</p>
            <h3>Preview :</h3>
            <p>{isBold && isItalic ? <b><i>{text.length>0?text:"Please Enter some text first!"}</i></b> : isBold ? <b>{text.length>0?text:"Please Enter some text first!"}</b> : isItalic ? <i>{text.length>0?text:"Please Enter some text first!"}</i> : text.length>0?text:"Please Enter some text first!"}</p>
            <button disabled={text.length===0} className="btn btn-secondary btn-sm mx-2" onClick={handleBoldClick}>Bold</button>
            <button disabled={text.length===0} className="btn btn-secondary btn-sm mx-2" onClick={handleItalicClick}>Italic</button>
        </div>
        </>
    )
}