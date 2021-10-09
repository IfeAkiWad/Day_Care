import React from 'react'
import DaycareForm from '../daycarecomp/DaycareForm'

const Home = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <h4>{props.getDaycare.name}</h4>
                    Location: <br />
                    {props.getDaycare.address}<br /><br />
                </li>
            </ul>
            <DaycareForm daycare={props.getDaycare}/>
        </div>
    )
}
export default Home
