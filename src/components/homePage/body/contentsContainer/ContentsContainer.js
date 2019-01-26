import React, { Component } from 'react'
import '../../../assets/css/materializecss/materialize.min.css';
import '../../../assets/css/extracss/extra.1.0.0.css';
import LeftContentsContainer from './leftContentsContainer/LeftContentsContainer';
import RightContentsContainer from './rightContentContainer/RightContentContainer';

export class ContentsContainer extends Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <LeftContentsContainer />
                <RightContentsContainer />
            </div>
        </div>
    )
  }
}

export default ContentsContainer;