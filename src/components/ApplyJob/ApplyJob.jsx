import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ApplyJob = ({ applyJob }) => {
const {id,logo, job_title, company_name, remote_or_onsite,job_type, location, salary} = applyJob;
return (
<div className="card card-side bg-base-100 shadow-xl my-4">
    <figure>
        <img src={logo} alt="" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90EF] mr-4 text-[#7E90EF]">
                {remote_or_onsite} </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90EF] mr-4 text-[#7E90EF]"> 
                {job_type}
            </button>
        </div>
        <div className="flex text-gray-400">
            <p className="flex items-center my-4"> <span className="mr-2"><IoLocationOutline/></span> Location: {location} </p>
            <p className="flex items-center"> <span className="mr-2"> <AiOutlineDollar/> </span> Salary: {salary} </p>
        </div>
        <div className="card-actions justify-end">
            <Link to = {`/job/${id}`}>
                <button className="btn btn-primary">View Details</button>
            </Link>
        </div>
    </div>
</div>
);
};

export default ApplyJob;