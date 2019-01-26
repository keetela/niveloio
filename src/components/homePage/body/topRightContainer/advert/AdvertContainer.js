import React, { Component } from 'react'
import '../../../../assets/css/materializecss/materialize.min.css';
import '../../../../assets/css/extracss/extra.1.0.0.css';
import ads from '../../../../assets/images/ads.png';

export class AdvertContainer extends Component {
  render() {
    return (
      <div class="image hide-on-med-and-down">
        <img src={ads} alt="Advert" />
      </div>
    )
  }
}

export default AdvertContainer;