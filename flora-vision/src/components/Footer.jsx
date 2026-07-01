import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/images/logo.png";

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">


                <div className="footer-left">

                    <div className="footer-logo">

                        <img
                            src={logo}
                            alt="FloraVision"
                        />

                        <h2>

                            FloraVision.

                        </h2>

                    </div>

                    <p>

                        "From lush indoor greens to vibrant outdoor blooms,
                        our plants are crafted to thrive and elevate your
                        living environment."

                    </p>

                    <div className="social-links">

                        <a href="#">

                            <FaFacebookF />

                        </a>

                        <a href="#">

                            <FaTwitter />

                        </a>

                        <a href="#">

                            <FaLinkedinIn />

                        </a>

                    </div>

                </div>

               

                <div className="footer-center">

                    <h3>

                        Quick Link's

                    </h3>

                    <a href="#">

                        Home

                    </a>

                    <a href="#">

                        Type's Of Plant's

                    </a>

                    <a href="#">

                        Contact

                    </a>

                    <a href="#">

                        Privacy

                    </a>

                </div>

                

                <div className="footer-right">

                    <h3>

                        For Every Update.

                    </h3>

                    <form className="subscribe-box">

                        <input

                            type="email"

                            placeholder="Enter Email"

                        />

                        <button>

                            SUBSCRIBE

                        </button>

                    </form>

                    <p className="copyright">

                        FloraVision © All Rights Reserved

                    </p>

                </div>

            </div>

        </footer>

    );

}