import React ,{useState} from 'react'
//import { useOutletContext } from 'react-router-dom'


export default function About() {
 // const {greating}=useOutletContext()
  //console.log(greating)
    const [myStyle,setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const [btnText,setBtnText]=useState("Enable Dark Mode")

const toggleStyle=()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:"white",
            backgroundColor:"black"
        })
        setBtnText('Enable light Mode')
    }else{
        setMyStyle({
            color:"black",
            backgroundColor:"white"
        })
        setBtnText('Enable dark Mode')
    }
}

  return (
    <div className='container' style={myStyle}>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze you text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        textutils gives you way to analyse yoiur text quickly and efficiently.
    </div>
  </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>free  to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutil is a free charactor counter tool that provides instant character count and word count statictics for a given text.Textutils reports the number of words and characters.Those it is suitabl for writing text with words/character limits.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibility </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any web browser such as chrome, firefox,internet explorer,Safari,opera.it suits to count characters in facebook ,blog,books,exel document,pdf document ,etc.

     </div>
    </div>
  </div>
</div>

<div className='container my-3'>
    <button onClick={toggleStyle} type="button" className='btn btn-primary'>{btnText}</button>
</div>

    </div>
  )
}

