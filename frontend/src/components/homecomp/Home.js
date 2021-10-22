import React from 'react'
// import DaycareForm from '../daycarecomp/DaycareForm'

const Home = (props) => {
    return (
        <div class="welcome"> 
                    <h4>{props.getDaycare.name}</h4>
                    Phone: <br />
                    (212)555-1918 <br /><br />
                    Location: <br />
                    {props.getDaycare.address}<br /><br />
            {/* <DaycareForm daycare={props.getDaycare}/> */}

        </div>
    )
}

export default Home
