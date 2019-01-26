import React, { Component } from 'react'
import '../../assets/css/materializecss/materialize.min.css';
import '../../assets/css/extracss/extra.1.0.0.css';
import TopLeftContainer from './topLeftContainer/TopLeftContainer';
import TopRightContainer from './topRightContainer/TopRightContainer';
import TabsContainer from './tabsContainer/TabsContainer';
import JoinUs from './joinUs/JoinUsContainer';
import ContentsContainer from './contentsContainer/ContentsContainer';



export class Body extends Component {
  render() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <TopLeftContainer />
                    <TopRightContainer />
                </div>
            </div>
            <TabsContainer />
            <JoinUs />
            <ContentsContainer />
        </div>        
    )
  }
}

export default Body;
