import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppliedJob from "../AppliedJob/AppliedJob";

const Root = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
