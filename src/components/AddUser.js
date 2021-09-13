import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { GlobalContext } from '../context/GlobalState';
const AddUser = () => {
    const [name,setName] = useState('')
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser);
        history.push('/');
    }
    return (
        <div className="my-5 w-75 mx-auto">
            <h1>🤵 Add User</h1>

            <div className="mt-4">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"> ✍ Add Name</label>
                        <input type="text" className="form-control py-3" id="username" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="d-flex justify-content-start">
                        <NavLink to="/">
                            <button type="submit" className="btn btn-danger me-2 py-2 px-3">✖ Cancel</button>
                        </NavLink>
                        <button type="submit" className="btn btn-primary py-2 px-3">✔ Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
