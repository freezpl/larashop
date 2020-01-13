import React from 'react'
import './left_expander.css'
import DashLink from '../DashLink/DashLink'
//import { Link } from 'react-router-dom'

const LeftExpander = (props) => {
    return (
                <div className="left-block">
                    <ul>
                        {/* <DashLink path="/dashboard" label="Dashboard"/>
                        <DashLink path="/dashboard/products" label="Products"/> */}
                    </ul>
                </div>
    );
}

export default LeftExpander;