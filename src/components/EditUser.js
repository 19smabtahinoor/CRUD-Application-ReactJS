import React from 'react';
import { NavLink } from 'react-router-dom';

const EditUser = () => {
    return (
        <div className="my-5 w-75 mx-auto">
            <h1>🤵 Edit User</h1>

            <div className="mt-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">✍ Edit Name</label>
                        <input type="text" className="form-control py-3" id="username" />
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
