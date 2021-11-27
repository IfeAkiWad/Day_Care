import React, { Component } from 'react'
import ToddlerFilterContainer from './ToddlerFilterContainer'
import ToddlerTableRow from '../components/toddlercomp/ToddlerTableRow'

// Daycare component mapping through the props recieved from daycare container and passing props down to toddlerlist and toddler conatainer

class ToddlerContainer extends Component {
    constructor(){
        super()
        // let initialArray = this.props.getDaycare.toddlers
        // let initialCopy = initialArray.slice()
        this.state = {
            // slicedInitialArray: initialCopy,
            sortedArray: []
        }
        
    }

    sort = () => {
        let toddlers = this.props.getDaycare.toddlers

        this.setState({
            ...this.state, sortedArray: toddlers.slice().sort((t,u) =>{
            if (t.name < u.name) {return -1;}
            if (t.name > u.name) {return 1;}
            return 0;
           })
    })
    //     let initialArray = this.props.getDaycare.toddlers
    //     let copiedInitialArray = JSON.parse(JSON.stringify(initialArray));
    //     console.log(copiedInitialArray)
    }

    render() { 
       
        return (
            <div id="table-list">
                <button id='sort-button' onClick={this.sort}>Sort</button>
                <br />
                    {/* eslint-disable-next-line array-callback-return*/}
                    {this.props.getDaycare.toddlers.map( toddler => { //Passing props containing an array of toddlers and  their info
                        return <ToddlerTableRow key={toddler.id} toddlerDetail={toddler} />
                    })}
                     {/* passing props of the whole daycare object */}
                <ToddlerFilterContainer getToddlers={this.props.getDaycare}/> 
            </div>
        )
    }
}

export default ToddlerContainer 
