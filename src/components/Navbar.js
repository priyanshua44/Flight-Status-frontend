import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./navbar.css";
import SearchBar from "./SearchBar";
import DropdownBox from "../SearchBox/DropDownBox";
import SearchByFlightNumber from "../SearchBox/SearchByFlightNumber";
import SearchByAirline from "../SearchBox/SearchByAirline";
import SearchByRoute from "../SearchBox/SearchByRoute";
import SearchByRouteResult from "../SearchBox/SearchByRouteResult";
import SearchByAirlineResult from "../SearchBox/SearchByAirlineResult";
import SearchByFlightNumberResult from "../SearchBox/SearchByFlightNumberResult";

export default function Navbar({onData}) {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeBox1, setActiveBox1] = useState(null);
  const [activeBox2, setActiveBox2] = useState(null);
  const [activeBox3, setActiveBox3] = useState(null);
  const [activeBox4, setActiveBox4] = useState(null);
  const [activeBox5, setActiveBox5] = useState(null);
  const [activeBox6, setActiveBox6] = useState(null);
  const [sharedData, setSharedData] = useState(null);
  const [boxWidth, setBoxWidth] = useState('200px'); // Default width
  const searchBarRef = useRef(null);

  const handleDataFromResult = (dataFromResult) => {
    onData(dataFromResult);
    setActiveBox6(null);
  };

  const handleSearchClick = () => {
    setDropdownVisible(prev => !prev);
  };

  const handleLinkClick = (box) => {
    if (box == "searchByFlightNumber") {
      setActiveBox1(box);
    } if (box == "searchByRoute") {
      setActiveBox2(box);
    }
    if (box == "searchByAirline") {
      setActiveBox3(box);
    }
    setDropdownVisible(false); // Close dropdown after clicking a link
  };

  const handleAdditionalBoxClick = (box, data) => {
    if (box == "searchByRouteResult") {
      setActiveBox6(box);
      setActiveBox2(null);
      setSharedData(data);
    }
    if (box == "searchByAirlineResult") {
      // setActiveBox5(box);
      setActiveBox6(box);
      setActiveBox3(null);
      setSharedData(data);
    }
    if (box == "searchByFlightNumberResult") {
      setActiveBox6(box);
      setActiveBox1(null);
      setSharedData(data);
    }
  }

  const handleCloseBox = () => {
    setActiveBox1(null);
    setActiveBox2(null);
    setActiveBox3(null);
    setActiveBox4(null);
    setActiveBox5(null);
    setActiveBox6(null);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.search-bar') === null &&
      event.target.closest('.dropdown-box') === null &&
      event.target.closest('.additional-box') === null &&
      event.target.closest('.additional-box2') == null) {
      setDropdownVisible(false);
      setActiveBox1(null);
      setActiveBox2(null);
      setActiveBox3(null);
      setActiveBox4(null);
      setActiveBox5(null);
      setActiveBox6(null);
    }
  };

  // Add event listener for clicks outside the components
  useEffect(() => {
    if (searchBarRef.current) {
      setBoxWidth(`${searchBarRef.current.offsetWidth}px`);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <div className="col col-lg-7">
              <SearchBar onClick={handleSearchClick} ref={searchBarRef} />
              <DropdownBox
                isVisible={isDropdownVisible}
                onLinkClick={handleLinkClick}
                width={boxWidth}

              />
              {activeBox1 && (
                <SearchByFlightNumber isVisible={!!activeBox1} onLinkClick={handleAdditionalBoxClick} onClose={handleCloseBox} width={boxWidth}
                />
              )}
              {activeBox2   && (
                <SearchByRoute isVisible={!!activeBox2} onClose={handleCloseBox} onLinkClick={handleAdditionalBoxClick} width={boxWidth}
                />
              )}

              {activeBox3 && (
                <SearchByAirline isVisible={!!activeBox3} onLinkClick={handleAdditionalBoxClick} onClose={handleCloseBox} width={boxWidth}
                />
              )}

              {/* {activeBox4 && (
                <SearchByRouteResult isVisible={!!activeBox4} onClose={handleCloseBox} width={boxWidth}
                />
              )}
              
              {activeBox5 && (
                <SearchByAirlineResult isVisible={!!activeBox5} onClose={handleCloseBox} width={boxWidth}
                />
              )} */}

              {activeBox6 && (
                <SearchByFlightNumberResult isVisible={!!activeBox6} onSendData={handleDataFromResult} data={sharedData} onClose={handleCloseBox} width={boxWidth}
                />
              )}
              

            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarNav">
              <ul className="navbar-nav pt-2 w-100">
                {/* <li className="nav-item pe-1  col col-lg-10">



                </li> */}

                <li className="nav-item px-1">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link d-flex" href="#">
                    <i className="fa-solid fa-user fa-lg align-content-center me-2"></i> Login/SignUp
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link" href="#">
                    <i className="fa-solid fa-bell fa-lg"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}