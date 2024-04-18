import React from 'react'
import propTypes from 'prop-types'
import {Link,Outlet}
from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
    <div>
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">

    <a className="navbar-brand" href="/">{props.tittle}</a>  

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
       <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.aboutReact}</Link>
        </li>

      </ul>
      <form className="d-flex me-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mr-6" type="submit">Search</button>
      </form>

<div className='d-flex'>
  <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
  <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
  <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
  <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
  <div className='bg-light rounded mx-2' onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
  <div className='bg-dark rounded mx-2' onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
</div>

       {/*<div className="form-check form-switch ms-2">     //this is for a switch
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
         //${props.mode==='light'?'dark':'light'}  change text based on mode 
      </div>    */}
    </div>
  </div>
</nav>
      
    </div>
   <Outlet/>       {/*  need to add this in a component in which we are routing another component atherwise code will not work */}
    </>
  )
}
//this is to restrict the type of property(props)
Navbar.propTypes = {
    tittle: propTypes.string,   
    aboutReact: propTypes.string.isRequired    //means this must be passed.it is required

}

//if any attribute is not written it will by default takes this
//i.e <Navbar  aboutReact="it is React App"  />  in App.js .it will take this value for aboutReact
Navbar.defaultProps = {
     tittle: "TextUtils App",

};