import "./BestO2.css";

import SectionTitle from "../components/SectionTitle";

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

import bestPlant from "../assets/images/hero-card-plant.png";

export default function BestO2() {

    return (

        <section className="best-o2">

            <div className="best-container">

               <div className="section-title">

                    <span className="corner tl"></span>
                    <span className="corner bl"></span>

                    <h2>Our Best o2</h2>

                    <span className="corner tr"></span>
                    <span className="corner br"></span>

                </div>

                <div className="best-card">

              

                    <div className="best-image">

                        <img
                            src={bestPlant}
                            alt="Best O2 Plant"
                        />

                    </div>

                   

                    <div className="best-content">

                        <h2>

                            We Have Small And Best O2 Plants Collection's

                        </h2>

                        <p>

                            Oxygen-producing plants, often referred to as
                            "O2 plants," are those that release oxygen into
                            the atmosphere through the process of photosynthesis.

                        </p>

                        <p>

                            Many plants can help filter out pollutants and
                            toxins from the air, such as formaldehyde,
                            benzene, and trichloroethylene. This makes the
                            air cleaner and healthier to breathe.

                        </p>

                        <div className="best-bottom">

                            <button className="explore-btn">

                                Explore

                            </button>

                            <div className="slider-nav">

                                <HiChevronLeft />

                                <span>

                                    01/04

                                </span>

                                <HiChevronRight />

                            </div>

                        </div>

                    </div>

                </div>


                <div className="best-dots">

                    <span className="active"></span>

                    <span></span>

                    <span></span>

                </div>

            </div>

        </section>

    );

}