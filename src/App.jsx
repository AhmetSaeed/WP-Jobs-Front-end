import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Job from "./Pages/Job";

function App() {
 return (
  <div>
   <Router>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/single" element={<SinglePost />} />
     <Route path="/post" element={<Job />} />
     <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </Router>
  </div>
 );
}

export default App;
