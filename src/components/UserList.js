import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


const UserList = () => {
    const { users, removeUser} = useContext(GlobalContext);
    return (
        <>
        {users.map(user => {
            return(
                <div className="rounded-3 shadow-sm border p-3 d-flex align-items-center my-4" key={Math.random()}>
                    <h5 style={{ flexGrow: 1 }}>{user.name}</h5>
                    <div className="d-flex justify-content-end">
                        <NavLink to={"/edit/" + user.id}>
                            <button type="submit" className="btn btn-success me-2 py-2 px-3">✍ Edit</button>
                        </NavLink>
                        <button type="button" className="btn btn-danger py-2 px-3" onClick={() => removeUser(user.id)}>✖ Delete</button>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default UserList
