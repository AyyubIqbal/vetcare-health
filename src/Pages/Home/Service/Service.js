import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, title, details } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 service">
            <div className="card-group">
                <div className="card">
                    <img src={img} width="50%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {details.slice(0, 100)}
                        </p>
                        <Link to={`/details/${id}`}>
                            <button className='btn btn-success'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;