import React from 'react';
import { NavLink } from 'react-router-dom';

const UserList = ({ name }) => {
    return (
        <div className="rounded-3 shadow-sm border p-3 d-flex align-items-center my-4">
            <h5 style={{ flexGrow: 1 }}>{name}</h5>
            <div className="d-flex justify-content-end">
                <NavLink to="/edit/1">
                    <button type="submit" className="btn btn-success me-2 py-2 px-3">✍ Edit</button>
                </NavLink>
                <button type="button" className="btn btn-danger py-2 px-3">✖ Delete</button>
            </div>
        </div>
    )
}

export default UserList
