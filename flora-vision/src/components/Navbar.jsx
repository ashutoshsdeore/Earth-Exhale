import "./Navbar.css";
import { useState } from "react";

import logo from "../assets/images/logo.png";

import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="navbar">

            <div className="navbar-container">

                <a href="/" className="logo">

                    <img src={logo} alt="FloraVision" />

                    <span>FloraVision.</span>

                </a>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <a href="#">Home</a>

                    <a href="#">
                        Plants Type
                        <IoIosArrowDown className="arrow" />
                    </a>

                    <a href="#">More</a>

                    <a href="#">Contact</a>

                </nav>

                <div className="nav-icons">

                    <FiSearch />

                    <HiOutlineShoppingBag />

                    <HiBars3
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                </div>

            </div>

        </header>

    );

}