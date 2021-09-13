import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({id:'',name:''})
    const { users,editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserid = props.match.params.id;

    useEffect(() => {
        const userId = currentUserid;
        const selecteduser = users.find(user => user.id === userId);
        setSelectedUser(selecteduser)
    },[currentUserid,users])

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser)
        history.push('/');
    }

    return (
        <div className="my-5 w-75 mx-auto">
            <h1>🤵 Edit User</h1>

            <div className="mt-4">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">✍ Edit Name</label>
                        <input type="text" className="form-control py-3" id="username" name="name" value={selectedUser.name} onChange={(e) => setSelectedUser({ ...selectedUser, [ e.target.name] : e.target.value})}/>
                    </div>

                    <div className="d-flex justify-content-start">
                        <NavLink to="/">
                            <button type="submit" className="btn btn-danger me-2 py-2 px-3">✖ Cancel</button>
                        </NavLink>
                        <button type="submit" className="btn btn-primary py-2 px-3">✔ Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser
