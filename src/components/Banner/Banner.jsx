import React from "react";
import userImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="p-5 bg-slate-400">
      <div className="flex justify-evenly items-center">
        <div className="">
          <div className="text-5xl font-semibold mb-5">
            <h2 className="mb-3">One Step</h2>
            <h2>Close To Your</h2>
            <h2 className="mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent">
              Dream Job
            </h2>
          </div>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn  bg-gradient-to-r from-purple-500  to-indigo-500 border-0 mt-6">
            Get Start
          </button>
        </div>
        <div>
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
