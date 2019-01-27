import React, { Component } from 'react'
import '../assets/css/materializecss/materialize.min.css';
import '../assets/css/extracss/extra.1.0.0.css';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSearch } from '@fortawesome/free-solid-svg-icons';


export class Navbar extends Component {
  render() {
    return (
      <nav className="header white">
        <div className="container">
            <div className="nav-wrapper">
              <div className="logo">  
                  <a href="#">
                    <img src={logo} alt="Logo | Nivelo" />
                  </a>
              </div>
              <ul className="right">
                  <li><a href="#" className="black-text btn transparent z-depth-0"> <FontAwesomeIcon icon={faSearch} className="l-text"/> </a></li>
                  <li><a href="#" className="black-text btn z-depth-0 radius-4 grey lighten-3">Get Started </a></li>
                  <li><a href="#" className="black-text btn transparent dropdown-trigger z-depth-0"  data-target='dropProfile'><FontAwesomeIcon icon={faUser} className="l-text"/></a></li>
              </ul>
                {/* <!-- Dropdown Structure --> */}
              <ul id='dropProfile' className='dropdown-content navbar-drop-content'>
                  <li><a href="#!">Profile</a></li>
                  <li><a href="#!">Control Panel</a></li>
                  <li className="divider" tabindex="-1"></li>
                  <li><a href="#!">Logout</a></li>
                  <li className="divider" tabindex="-1"></li>
                  <li><a href="#!">Help</a></li>
              </ul>
            </div>
        </div>
      </nav>
    )
  }
}

const styles = {
  navbar:{
    backgroundColor:'white'
  },
  textDark:{
    color:'black'
  }
}

export default Navbar
