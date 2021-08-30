import React from 'react'
import Heading from './Heading'
import UserList from './UserList'

const Home = () => {
    return (
        <div className="my-5 w-75 mx-auto">
            <Heading />
            <UserList name={'Abtahi Noor'} />
            <UserList name={' Geyani Manus {Kobi} '}/>
        </div>
    )
}

export default Home
