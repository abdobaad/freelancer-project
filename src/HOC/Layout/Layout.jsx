import React from 'react';
import Footer from '../../Components/Header_Footer/Footer/Footer';
import Header from "../../Components/Header_Footer/Header/Header";

import "./Layout.scss";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <div className="layout_container">
            {children}
        </div>
        <Footer />
        </>
        
    );
};

export default Layout;