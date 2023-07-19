import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { Link } from "react-router-dom";

function Header() {
 return (
  <div className="flex justify-between items-center mx-32 my-5">
   <div className="logo">
    <Link to="/" className="font-bold text-2xl">
     WP-Jobs
    </Link>
   </div>

   {/* <div className="flex gap-5 items-center">
    <div className="mx-auto">
     <img src={mailcamp} alt="" srcset="" className="w-16 rounded-full" />
    </div>
    <Link className="px-10 py-2 bg-black text-white rounded-md">Logout</Link>
   </div> */}

   <div className="flex gap-5 items-center">
    <Link to="/login">Login</Link>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
     Signup
    </Link>
   </div>
  </div>
 );
}

export default Header;
