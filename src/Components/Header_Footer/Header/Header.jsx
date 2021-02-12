import React from 'react';
import FilteringNav from '../../FilteringNav/FilteringNav';
import NavBar from '../../NavBar/NavBar';

//styles
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <div className="header-container">              
               <NavBar/>
               <FilteringNav/>
            </div>
        </header>
    );
};

export default Header;