import React, { Component } from 'react'
import Image from '../Image.jpeg'
import ToddlerRead from '../ToddlerRead.jpeg'
import ToddlersMoving from '../ToddlersMoving.jpeg'
import ToddlerFriends from '../ToddlerFriends.jpeg'


class ImageGallery extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    likeIncrement = () => {
        let newCount = this.state.count + 1
        this.setState({count: newCount})
    }

    render() {
        return (
            <div id='image'>
                
                <div id='image-div'>
                    <h2 id='image-htwo'>We believe learning comes from interactive play!</h2>
                </div>
                <img className="toddler-image" src={Image} alt='Toddlers playing'/><br />
                <button id='likes' onClick={this.likeIncrement}> ❤️ {this.state.count}</button>
                <div>
                    <h2 id='image-htwo'>We believe words are fun!</h2>
                </div>
                <img className="toddler-image" src={ToddlerRead} alt='Toddler-learning' /><br />
                <button id='likes' onClick={this.likeIncrement}> ❤️ {this.state.count}</button>
                <div>
                    <h2 id='image-htwo'>We believe in moving our bodies!</h2>
                </div>
                <img className="toddler-image" src={ToddlersMoving} alt='Toddler-learning' /><br />
                <button id='likes' onClick={this.likeIncrement}> ❤️ {this.state.count}</button>
                <div>
                    <h2 id='image-htwo'>We believe in friendship!</h2>
                </div>
                <img className="toddler-image" src={ToddlerFriends} alt='Toddler-learning' /><br />
                <button id='likes' onClick={this.likeIncrement}> ❤️ {this.state.count}</button>
    
    
            </div>
        )
    }
    
}

export default ImageGallery
