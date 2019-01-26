import React, { Component } from 'react'
import '../../../assets/css/materializecss/materialize.min.css';
import '../../../assets/css/extracss/extra.1.0.0.css';
import Advert from './advert/AdvertContainer';
import Topics from './topics/TopicsContainer';

export class TopRightContainer extends Component {
  render() {
    return (
        <div class="col s12 m4 l4">
           <Advert />
           <Topics />
        </div>
    )
  }
}

export default TopRightContainer;
