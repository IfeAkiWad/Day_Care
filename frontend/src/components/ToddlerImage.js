import React from 'react'
import Image from '../Image.jpeg'
import ToddlerRead from '../ToddlerRead.jpeg'
import ToddlersMoving from '../ToddlersMoving.jpeg'
import ToddlerFriends from '../ToddlerFriends.jpeg'


const ToddlerImage = () => {
    return (
        <div className="toddler-image">
       
            <div>
                <h2 id='image-htwo'>We believe learning comes from interactive play!</h2>
            </div>
            <img src={Image} alt='Toddlers playing'/>
            <div>
                <h2 id='image-htwo'>We believe words are fun!</h2>
            </div>
            <img src={ToddlerRead} alt='Toddler-learning' />
            <div>
                <h2 id='image-htwo'>We believe in moving our bodies!</h2>
            </div>
            <img src={ToddlersMoving} alt='Toddler-learning' />
            <div>
                <h2 id='image-htwo'>We believe in friendship!</h2>
            </div>
            <img src={ToddlerFriends} alt='Toddler-learning' />


        </div>
    )
}

export default ToddlerImage
