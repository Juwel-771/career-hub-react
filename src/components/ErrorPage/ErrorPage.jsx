import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Oops!! page not found!!</h3>
            <Link to = "/"><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;