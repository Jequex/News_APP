import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404: Error</h1>
            <p>The page you are looking for doesn,t exist</p>
            <Link to="/">click here to restart</Link>
        </div>
    )
}

export default Error
