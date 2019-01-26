import React, { Component } from 'react'
import '../../../assets/css/materializecss/materialize.min.css';
import '../../../assets/css/extracss/extra.1.0.0.css';
import joinUs from '../../../assets/images/join.jpg';

export class JoinUsContainer extends Component {
  render() {
    return (
        <div class="container">
            <div class="row bg-ext-grey">
                <div class="col s12 m6 l6 nm np valign-wrapper">
                    <div class="xl-margin">
                    <h3 class="white-text xxl-text nm np bold">Everyone has Something to Share.</h3>
                    <h4 class="white-text xl-text nm">Learn, Grow & Educate!</h4>
                    <br />
                    <a href="#" class="btn orange darken-3 radius-4 z-depth-0">Sign Up</a>
                    <span class="grey-text l-h-padding">or</span>
                    <a href="#" class="btn white-text radius-4 z-depth-0 grey darken-2">Login</a>
                </div>
                </div>
                <div class="col s12 m6 l6 nm np hide-on-med-and-down">
                    <div class="image">
                    <img src={joinUs} alt="Join Us" />
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default JoinUsContainer;