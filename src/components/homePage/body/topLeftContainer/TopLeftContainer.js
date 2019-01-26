import React, { Component } from 'react'
import '../../../assets/css/materializecss/materialize.min.css';
import '../../../assets/css/extracss/extra.1.0.0.css';
import storyTelling from '../../../assets/images/storytelling.jpg';

export class TopLeftContainer extends Component {
  render() {
    return (
        <div class="col s12 m8 l8">
            <div class="image"><img src={storyTelling} alt="title" /></div>
            <h2 class="nm np xl-text bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore nesciunt non...</h2>
        </div>
    )
  }
}

export default TopLeftContainer;
