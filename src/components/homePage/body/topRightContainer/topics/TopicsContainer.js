import React, { Component } from 'react'
import '../../../../assets/css/materializecss/materialize.min.css';
import '../../../../assets/css/extracss/extra.1.0.0.css';

export class TopicsContainer extends Component {
  render() {
    return (
        <div>
            <h2 class="xl-text bold np">Topics</h2>
            <div>
                <div class="chip"><a href="#">#Enterpreneurship</a></div>
                <div class="chip"><a href="#">#Javascrit</a></div>
                <div class="chip"><a href="#">#Conscious </a></div>
                <div class="chip"><a href="#">#Life </a></div>
                <div class="chip"><a href="#">#Health </a></div>
                <div class="chip"><a href="#">#Startup </a></div>
                <div class="chip"><a href="#">#Self </a></div>
                <div class="chip"><a href="#">#Improvement</a></div>
                <div class="chip"><a href="#">#Change </a></div>
                <div class="chip"><a href="#">#Art </a></div>
            </div>
        </div>
    )
  }
}

export default TopicsContainer;