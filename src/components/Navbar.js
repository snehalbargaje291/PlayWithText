import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/PlayWithText-Publish">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/PlayWithText-Publish">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abtText}</Link>
            </li>
          </ul>
          {props.isVisible ?(
          <div className="d-flex my-2">
            <div className="rounded border mx-2" onClick={() => props.handleColor('#042743')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#042743' }}></div>
            <div className="rounded border mx-2" onClick={() => props.handleColor('#023020')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#023020'}}></div>
            <div className="rounded border mx-2" onClick={() => props.handleColor('#3C0008')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#3C0008'}}></div>
          </div>) 
          : (
            <div className="d-flex my-2">
              <div className="rounded mx-2" onClick={() => props.handleColor('#87CEEB')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#87CEEB' }}></div>
              <div className="rounded mx-2" onClick={() => props.handleColor('#77DD77')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#77DD77'}}></div>
              <div className="rounded mx-2" onClick={() => props.handleColor('#DB5856')} style={{height: '25px', width: '25px', color: props.mode==='dark'?'white':'black', backgroundColor:'#DB5856'}}></div>
            </div>) 
          }
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
          </div>
        </div>
      </div>
    </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    abtText : PropTypes.string
}
Navbar.defaultProps = {
    title : "MyApp",
    abtText : "About"
}