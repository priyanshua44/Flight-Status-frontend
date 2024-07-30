import React, { forwardRef } from 'react';
import './searchBar.css';

const SearchBar = forwardRef(({ onClick }, ref) => {
    return (
        <>
            <div className="search-bar bg-dark text-white"
                ref={ref}>
                <i className="fa-solid fa-magnifying-glass px-1"></i>
                <input className="bg-dark text-white" type="text" placeholder="Search Flight by Flight Route, Flight Number, Airline" onClick={onClick} />

            </div>
        </>
    );
});

export default SearchBar;
