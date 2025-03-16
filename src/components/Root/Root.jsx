import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppliedJob from '../AppliedJob/AppliedJob';

const Root = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;