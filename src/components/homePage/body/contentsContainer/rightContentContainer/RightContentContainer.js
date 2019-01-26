import React, { Component } from 'react'
import '../../../../assets/css/materializecss/materialize.min.css';
import '../../../../assets/css/extracss/extra.1.0.0.css';
import storytelling from '../../../../assets/images/storytelling.jpg';
import pancake from '../../../../assets/images/pancake.jpg';



export class RightContentsContainer extends Component {
  render() {
    return (
        <div class="col s12 m3 l4">
            <h2 class="l-text bold nm">Snapped!</h2>
            <div class="m-v-margin">
                <div class="image"><img src={storytelling} alt="title" /></div>
                <h2 class="nm np l-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit...</h2>
                <div><a href="#" class="grey-text">John Doe</a></div>
            </div>
            <div class="m-v-margin">
                <div class="image"><img src={storytelling} alt="title" /></div>
                <h2 class="nm np l-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit...</h2>
                <div><a href="#" class="grey-text">John Doe</a></div>
            </div>
            <div class="clear"></div>
            {/* <!-- featured posts --> */}
            <div class="grey lighten-5 l-v-margin l-padding">
                <h2 class="l-text bold  nm">Editor's Choice</h2>
                <ul class="collection nb">
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                
                </ul>
                <div class="clear"></div>
            </div>
            {/* <!-- Questions --> */}
            <div class="grey lighten-5 l-v-margin l-padding">
                <h2 class="l-text bold  nm">Q&A</h2>
                <ul class="collection nb">
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                    <li class="collection-item avatar transparent">
                        <img src={pancake} alt="" class="circle" />
                        <span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo rerum</span>
                        <div><a href="#" class="grey-text">John Doe</a></div>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
    )
  }
}

export default RightContentsContainer;