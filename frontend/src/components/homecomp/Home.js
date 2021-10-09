import React from 'react'

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
        </div>
    )
}
export default Home
