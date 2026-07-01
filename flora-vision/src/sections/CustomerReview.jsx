import "./CustomerReview.css";

import { HiStar } from "react-icons/hi2";
import SectionTitle from "../components/SectionTitle";

import { reviews } from "../data/reviews";

export default function CustomerReview() {

    return (

        <section className="customer-review">

            <div className="customer-container">

                <div className="section-title">

                    <span className="corner tl"></span>
                    <span className="corner bl"></span>

                    <h2>Customer Reviews</h2>

                    <span className="corner tr"></span>
                    <span className="corner br"></span>

                </div>

                <div className="customer-grid">

                    {reviews.map((review) => (

                        <div
                            className="customer-card"
                            key={review.id}
                        >

                            <svg
                                className="customer-shape"
                                viewBox="0 0 340 250"
                                preserveAspectRatio="none"
                            >

                                <defs>

                                    <linearGradient
                                        id={`reviewGradient-${review.id}`}
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >

                                        <stop
                                            offset="0%"
                                            stopColor="#3B4B39"
                                            stopOpacity=".35"
                                        />

                                        <stop
                                            offset="50%"
                                            stopColor="#283326"
                                            stopOpacity=".28"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#1D251C"
                                            stopOpacity=".34"
                                        />

                                    </linearGradient>

                                </defs>

                                <path

                                    fill={`url(#reviewGradient-${review.id})`}

                                    d="
                                    M25 35

                                    Q25 18 45 18

                                    H120

                                    C145 18 152 28 160 38

                                    C168 28 175 18 200 18

                                    H295

                                    Q315 18 315 35

                                    V220

                                    Q315 240 290 240

                                    H50

                                    Q25 240 25 220

                                    Z
                                    "

                                />

                            </svg>

                            <div className="customer-content">

                                <div className="customer-user">

                                    <img

                                        src={review.image}

                                        alt={review.name}

                                    />

                                    <div>

                                        <h3>

                                            {review.name}

                                        </h3>

                                        <div className="customer-stars">

                                            <HiStar />
                                            <HiStar />
                                            <HiStar />
                                            <HiStar />
                                            <HiStar />

                                        </div>

                                    </div>

                                </div>

                                <p>

                                    {review.review}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}