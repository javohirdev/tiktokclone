import React from 'react';
import logo from './logo.svg';
import SearchIcon from '@material-ui/icons/Search';

function NavSec() {
    return(
        <>
            <div className="nav">
                <div className="header__content">
                    <div className="navbar__logo">
                        <a href="#">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="search">
                        <form>
                            <input
                                type="text"
                                className="searchInput"
                                placeholder="Search account"
                            />
                            <button type="button">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                    <div className="navigations">
                        <li className="navItem">
                            <a href="#">Upload</a>
                        </li>
                        <button className="login">
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavSec;