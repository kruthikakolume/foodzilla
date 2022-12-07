import React from 'react';
import { Link } from 'react-router-dom'

function Home() {

    const data = encodeURIComponent("235 Park Dr")

    return (
        <>
            <h1>HOME</h1>
            <Link to='/userlogin'>User Login</Link>
            <Link to='/ownerlogin'>Owner Login</Link>
        </>

    );
}

export default Home;