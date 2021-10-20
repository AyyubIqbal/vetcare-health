import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServicesHome = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className="container" id='services'>
            <h1 className='fs-1 my-4 text-center'>OUR <span className='fw-bold text-success'>SERVICES</span></h1>
            <div className='row my-5'>
                {/* {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                } */}
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesHome;