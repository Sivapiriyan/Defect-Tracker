import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Employee from  './../employee/index'
import Defect from './../defect/index'



export class body extends Component {
    render() {
        return (
            <div>
                <Route exact path = "/" component = { Defect } /> 
                <Route path="/employee" component={Employee} />               
            </div>
        )
    }
}

export default body