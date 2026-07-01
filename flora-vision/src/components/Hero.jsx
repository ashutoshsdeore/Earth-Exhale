import "./Hero.css";

import { FaPlay } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import bg from "../assets/images/Bg1.jpg";
import heroPlant from "../assets/images/hero-card-plant.png";
import deskPlant from "../assets/images/desk-plant.png";
import cactus from "../assets/images/cactus.png";
import reviewUser from "../assets/images/review-user.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={bg} className="hero-bg" alt="" ></img>

            
            <div className="hero-overlay"></div>

            <div className="hero-container">

              

                <div className="hero-content">

                    <h1>Earth's Exhale</h1>

                    <p>
                        "Earth Exhale" symbolizes the purity and vitality of the Earth's
                        natural environment and its essential role in sustaining life.
                    </p>

                    <div className="hero-buttons">

                        <button className="buy-btn">
                            Buy Now
                        </button>

                        <button className="play-btn">
                            <FaPlay />
                        </button>

                        <span>Live Demo...</span>

                    </div>

                </div>

             

                <div className="review-card">

                    <div className="review-top">

                        <img src={reviewUser} alt="User" />

                        <div>

                            <h4>Ronnie Hamill</h4>

                            <small>★★★★★</small>

                        </div>

                    </div>

                    <p>
                        I can't express how thrilled I am with my new natural plants!
                        They bring such a fresh and vibrant energy to my home.
                    </p>

                </div>

                
                <div className="floating-product">

                    <svg
                        className="card-border"
                        viewBox="0 0 340 430"
                        preserveAspectRatio="none"
                    >
                        <defs>

                            <linearGradient
                                id="heroCardGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >

                                <stop offset="0%" stopColor="#3B4B39" stopOpacity=".35" />

                                <stop offset="45%" stopColor="#283326" stopOpacity=".28" />

                                <stop offset="100%" stopColor="#1D251C" stopOpacity=".34" />

                            </linearGradient>

                        </defs>

                        <path

                            fill="url(#heroCardGradient)"

                            d="
            M25 40

            Q25 20 45 20

            H95

            C125 20 140 35 150 55

            C160 72 180 72 190 55

            C200 35 215 20 245 20

            H295

            Q315 20 315 40

            V390

            Q315 415 290 415

            H50

            Q25 415 25 390

            Z
        "
                        />

                    </svg>
                    <img
                        src={heroPlant}
                        alt="Aglaonema"
                        className="floating-plant"
                    />

                    <div className="product-info">

                        <small>Indoor Plant</small>

                        <div className="title-row">

                            <h3>
                                Aglaonema <span>plant</span>
                            </h3>

                            <HiChevronRight className="arrow-right" />

                        </div>

                        <button className="buy-btn-card">
                            Buy Now
                        </button>

                    </div>

                    <div className="slider-dots">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>




            </div>


            <div className="trending-section">

                <div className="section-title">

                    <span className="corner tl"></span>
                    <span className="corner bl"></span>

                    <h2>Our Trendy Plants</h2>

                    <span className="corner tr"></span>
                    <span className="corner br"></span>

                </div>

                <div className="product-card first-card">

                    <img
                        src={deskPlant}
                        alt="Desk Plant"
                        className="card-plant left"
                    />

                    <div className="card-content">

                        <h2>For Your Desks Decorations</h2>

                        <p>
                            I recently added a beautiful desk decoration plant to my
                            workspace, and it has made such a positive difference!
                        </p>

                        <h3>Rs. 599/-</h3>

                        <div className="card-buttons">

                            <button>Explore</button>

                            <button className="icon-btn">

                                <HiOutlineShoppingBag />

                            </button>

                        </div>

                    </div>

                </div>


                <div className="product-card second-card">

                    <div className="card-content">

                        <h2>For Your Desks Decorations</h2>

                        <p>
                            The greenery adds a touch of nature and serenity to my desk,
                            making it feel more inviting and calming.
                        </p>

                        <h3>Rs. 399/-</h3>

                        <div className="card-buttons">

                            <button>Explore</button>

                            <button className="icon-btn">

                                <HiOutlineShoppingBag />

                            </button>

                        </div>

                    </div>

                    <img
                        src={cactus}
                        alt="Cactus"
                        className="card-plant right"
                    />

                </div>

            </div>
        </section>
    );
}