import React from "react";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
  {/* <figure><img src={logo} alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90EF] mr-4 text-[#7E90EF]" > {remote_or_onsite} </button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90EF] mr-4 text-[#7E90EF]"> {job_type} </button>
    </div>
    <div className="flex text-gray-400">
        <p> Location: {location} </p>
        <p> Salary: {salary} </p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
    
  </div>
</div>
  );
};

export default Job;
