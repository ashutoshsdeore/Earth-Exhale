import "./TopSelling.css";
import SectionTitle from "../components/SectionTitle";
import TopSellingCard from "../components/TopSellingCard";
import { topSellingPlants } from "../data/plants";

export default function TopSelling() {
  return (
    <section className="top-selling">

      <div className="top-selling-container">

        <div className="section-title">

          <span className="corner tl"></span>
          <span className="corner bl"></span>

          <h2>Our Top Selling Plants</h2>

          <span className="corner tr"></span>
          <span className="corner br"></span>

        </div>

        <div className="top-selling-grid">

          {topSellingPlants.map((plant) => (
            <TopSellingCard
              key={plant.id}
              plant={plant}
            />
          ))}

        </div>

      </div>

    </section>
  );
}