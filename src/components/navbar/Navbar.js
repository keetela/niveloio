import React, { Component } from 'react'
import '../assets/css/materializecss/materialize.min.css';
import '../assets/css/extracss/extra.1.0.0.css';
import logo from '../assets/images/LOGO_WHITE.png';

export class Navbar extends Component {
  render() {
    return (
      <nav class="white z-depth-1">
          <div class="container">
              <div class="nav-wrapper">
                <a class="logo hide-on-med-and-down">                     
                    <img src={logo} alt="Logo | Nivelo" />
                </a>
                <ul class="left hide-on-large-only">
                    <li><a href="#" class="black-text">MENU</a></li>
                </ul>
                <ul class="right">
                    <li><a href="#" class="black-text">Search</a></li>
                    <li><a href="#" class="black-text">Profile</a></li>
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
