import React from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";

function Job() {
 return (
  <div>
   <div className="flex mt-32 justify-between mx-48 items-start">
    <div className="">
     <h1 className="mb-5 text-center font-bold text-xl">
      Job Opportunities <span className="font-light text-gray-400">(200)</span>
     </h1>
     <div>
      <JobCard />
      <JobCard />
      <JobCard />
     </div>
    </div>
    <div className="">
     <Filter />
    </div>
   </div>
  </div>
 );
}

export default Job;
