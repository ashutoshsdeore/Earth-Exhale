import "./Reviews.css";

import { reviews } from "../data/reviews";

import ReviewCard from "../components/ReviewCard";

export default function Reviews() {

    return (

        <section className="reviews">

            <div className="reviews-container">

                <div className="reviews-title">

                    <h2>

                        Customer Review

                    </h2>

                </div>

                <div className="reviews-grid">

                    {reviews.map((review) => (

                        <ReviewCard

                            key={review.id}

                            review={review}

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}
