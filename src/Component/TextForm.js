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

    let text=document.getElementById("examplehtmlFormControlTextarea1");    //this can be also done
    console.log("Radhika")
    text.select();   //it selects text
    navigator.clipboard.writeText(text.value);  //copies text
    document.getSelection().removeAllRanges();  //deselect after copying

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
           <h1 className='mb-4'>{props.heading}</h1>
           <div className='mb-3'>
             <label  htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label><br/>
             <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white'  ,color:props.mode==='dark'?'white':'black'}} id="examplehtmlFormControlTextarea1" rows="3"></textarea>
           </div>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
           <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpaceRemoval}>Remove extra spaces</button>
      {/*disabled={text.length===0}   //if nothing is typed disable buttons */}
      </div>
      <div className='container my-3' > 
          <h1>Your text summary</h1>
         {/* <p>{(text.split(" ")).length} words and {text.length} characters</p>    //if we dont type any word then also it is giving word count 1*/}
           {/*<p>{(text.split(" ")).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>   
          above code will give word count 1 even if we write one word on one line like This
          hi
          how 
          you
      threfore write like this
      <p>{(text.split(/\s+/)).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        */} 
        <p>{(text.split(/\s+/)).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
      </div>
   
    )
}