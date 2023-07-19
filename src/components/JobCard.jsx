import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";

function JobCard() {
 return (
  <div className="w-[820px] bg-white shadow-md mb-5 px-4 py-2 rounded-md">
   <div className="flex items-center justify-between">
    <div className="flex gap-5 items-center mb-2">
     <div className="rounded-full">
      <img src={mailcamp} alt="" className="w-20 rounded-full" />
     </div>
     <div className="w-5/6">
      <h1 className="font-bold text-xl my-3">
       Pediatrician - Jowhar General Hospital
      </h1>
      <p className=" font-light">
       The past decades have seen continued migration from various African
       countries, causing a “brain drain” that has debilitated various public
       sector systems across the continent.
      </p>
      <div className="flex gap-10 mx-2 mt-5">
       <div className="flex items-center gap-2">
        <FaCalendarWeek />
        <p>Full-time</p>
       </div>
       <div className="flex items-center gap-2">
        <FaSignal />
        <p>Senior</p>
       </div>
       <div className="flex items-center gap-2">
        <FaComputerMouse />
        <p>Remote</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default JobCard;
