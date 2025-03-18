import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { getStoredJobApplication } from "../../utility/localstorage";
import ApplyJob from "../ApplyJob/ApplyJob";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);
  return (
    <div>
      <div className="text-right mt-5">
        <details className="dropdown">
            <summary className="btn m-1 btn-primary"> <span><RiArrowDropDownLine /></span> Filter</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
                <a>All</a>
            </li>
            <li>
                <a>Remote</a>
            </li>
            <li>
                <a>On-Site</a>
            </li>
            </ul>
        </details>
      </div>
      <h3>Applied Jobs: {appliedJobs.length}</h3>
      <div>
        {appliedJobs.map((applyJob) => (
          <ApplyJob key={applyJob.key} applyJob={applyJob}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
