import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center my-5'>
            <h1 className='mb-3'>404 - Not Found Anything</h1>
            <Link to='/'>
                <button className="btn btn-success">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;