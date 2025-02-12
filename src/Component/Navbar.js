import React from 'react'
import propTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
    <div>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <a className="navbar-brand" href="/">{props.tittle}</a>  

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">

            <li><a className="dropdown-item" href="/">{props.aboutReact}</a></li>

            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
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
     tittle: "Default tiitle",

};