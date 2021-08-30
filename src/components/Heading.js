import React from 'react'
import { NavLink } from 'react-router-dom'

const Heading = () => {
    return (
        <div className="d-flex align-items-center border-bottom pb-3">
            <h2 style={{flexGrow:1}}>👨‍👨‍👦‍👦 My Team</h2>
            <NavLink to="/add">
                <button className="btn btn-primary py-2 px-3"> + Add User</button>
            </NavLink>
        </div>
    )
}
export default Heading
