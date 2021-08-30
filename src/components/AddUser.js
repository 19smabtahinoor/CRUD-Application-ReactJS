import React from 'react';
import { NavLink } from 'react-router-dom';

const AddUser = () => {
    return (
        <div className="my-5 w-75 mx-auto">
            <h1>🤵 Add User</h1>

            <div className="mt-4">
                <form>
                    <div className="mb-3">
                        <label for="username" className="form-label"> ✍ Add Name</label>
                        <input type="text" className="form-control py-3" id="username" />
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
