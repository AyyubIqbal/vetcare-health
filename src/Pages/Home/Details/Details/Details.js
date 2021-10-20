import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams()
    // useEffect(() => {
    //     fetch(`./services.json/serviceId`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div className='text-center'>
            <h2>this is details page {serviceId}</h2>
        </div>
    );
};

export default Details;