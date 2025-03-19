import React from "react";
import accountImg from '../../assets/icons/accounts.png'
import creativeImg from '../../assets/icons/creative.png'
import marketingImg from '../../assets/icons/marketing.png'
import engineeringImg from '../../assets/icons/chip.png'
const CategoryList = () => {
  return (
    <div className="my-16">
      <div>
        <h2 className="text-3xl text-center font-semibold">
          Job Category List
        </h2>
        <p className="text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* card design */}
      <div className="my-20 flex justify-evenly">
        <div className="card w-60">
            <figure className="">
                <img src={accountImg} className="rounded-xl " />
            </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className="card w-60">
            <figure className="">
                <img src={creativeImg} className="rounded-xl " />
            </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design</h2>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="card w-60">
            <figure className="">
                <img src={marketingImg} className="rounded-xl " />
            </figure>
          <div className="card-body">
            <h2 className="card-title">Marketing & Sales</h2>
            <p>150 Jobs Available</p>
          </div>
        </div>
        <div className="card w-60">
            <figure className="">
                <img src={engineeringImg} className="rounded-xl " />
            </figure>
          <div className="card-body">
            <h2 className="card-title">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
