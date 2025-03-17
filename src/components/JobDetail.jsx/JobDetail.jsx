import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const jobInt = parseInt(id);
    const job = jobs.find(job => job.id === jobInt);
    console.log(job);
    return (
        <div>
            <h2>Job Details</h2>

            <div className='my-4'>
                <Link to = '/'>
                    <button className='btn btn-primary'>Go Back</button>
                </Link>
            </div>
           
        </div>
    );
};

export default JobDetail;