import "./TopSellingCard.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function TopSellingCard({ plant }) {

    const gradientId = `cardGradient-${plant.id}`;

    return (
        <div className="top-card">

            <svg
                className="top-card-shape"
                viewBox="0 0 340 430"
                preserveAspectRatio="none"
            >

                <defs>

                    <linearGradient
                        id={gradientId}
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
                    fill={`url(#${gradientId})`}
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
                src={plant.image}
                alt={plant.title}
                className="top-card-image"
            />

            <div className="top-card-content">

                <h3>{plant.title}</h3>

                <p>{plant.description}</p>

                <div className="price-row">

                    <span>{plant.price}</span>

                    <button className="bag-btn">
                        <HiOutlineShoppingBag />
                    </button>

                </div>

            </div>

        </div>
        
    );
}