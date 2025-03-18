import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localstorage';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(()=> {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);
        }
        
    }, [])
    return (
        <div> 
            <h3>Applied Jobs: {appliedJobs.length}</h3>
            <div >
                {
                    appliedJobs.map(applyJob => <ApplyJob key={applyJob.key} applyJob = {applyJob}></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;