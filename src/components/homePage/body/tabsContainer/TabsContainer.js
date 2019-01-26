import React, { Component } from 'react'
import '../../../assets/css/materializecss/materialize.min.css';
import '../../../assets/css/extracss/extra.1.0.0.css';

export class TabsContainer extends Component {
  render() {
    return (
        <div class="container">
            <div class="row verticalnav">
               <a href="#">Join Us</a>
               <a href="#">Hire Our Team</a>
               <a href="#">Profiles</a>
               <a href="#">Mentorship</a>
               <a href="#">Challenges</a>
            </div>
        </div>
    )
  }
}

export default TabsContainer;