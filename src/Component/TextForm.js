import React ,{useState}  from 'react'


export default function TexthtmlForm(props){
    const [text,setText]=useState('')
    // text="convert to upper" ;    //wrong way to change the text */}
    //setText("convert to upper"); //correct way to change value of text.But it should be present outside 
                                   //render function(TexthtmlForm) otherwise we will get error.typpically in responce to event  

const handleUpClick=()=>{
 
    //setText("conver to upper")    //this is correct way of changing it
    let newText=text.toUpperCase();   //to convert to uppercase
    setText(newText);
    props.showAlert("Converted to uppercase","success")  
}

const handleLoClick=()=>{
   
    let newText=text.toLowerCase();   
    setText(newText);
    props.showAlert("Converted to lowercase","success")  
}

const handleClearClick=()=>{
   
    let newText='';   
    setText(newText);
    props.showAlert("text cleared","success") 
}

const handleCopy=()=>{
  
    let text=document.getElementById("examplehtmlFormControlTextarea1");   
    text.select()    //it selects text
    navigator.clipboard.writeText(text.value)   //copies text
    props.showAlert("Text copied to clipboard","success")  
}

//still we will not be able to write(change) content in textarea so add onchange event and in it setText to 
//event.target.value so that entered text get written in textarea field
const handleChange=(event)=>{
    setText(event.target.value)    
}


const handleSpaceRemoval=()=>{
    let newText=text.split(/[ ]+/)   ///[ ]+/ = one or more spaces
    setText(newText.join(" "))  
    props.showAlert("Extra spaces removed","success")  
}


    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div className='container' > 
                      {/*    <h1>{props.heading} - {text} </h1>    //this can also be done  */}
           <h1>{props.heading}</h1>
           <div className='mb-3'>
             <label  htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label><br/>
             <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'  ,color:props.mode==='dark'?'white':'black'}} id="examplehtmlFormControlTextarea1" rows="3"></textarea>
           </div>
           <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
           <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
           <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
           <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
           <button className='btn btn-primary mx-1' onClick={handleSpaceRemoval}>Remove extra spaces</button>
      </div>
      <div className='container my-3' > 
          <h1>Your text summary</h1>
          <p>{(text.split(" ")).length} words and {text.length} characters</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter text in above textbox to preview it here"}</p>
      </div>
      </div>
   
    )
}