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
             <div className='text-3xl text-center font-bold my-20'>
                <h2>Job Details</h2>
            </div>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='md:col-span-3'>
                    <p><span className='font-semibold'>Job Description:</span> {job.job_description}</p>
                    <p className='my-5'><span className='font-semibold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className='font-semibold'>Educational Requirements:</p>
                    <p className='my-5'>{job.educational_requirements}</p>
                    <p className='font-semibold'>Experiences:</p>
                    <p className='my-5'>{job.experiences}</p> 

                </div>
                <div className='border'>
                    <h2 className="text-2xl">Side Things</h2>
                    <button className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>

            <div className='my-4'>
                <Link to = '/'>
                    <button className='btn btn-primary'>Go Back</button>
                </Link>
            </div>
           
        </div>
    );
};

export default JobDetail;