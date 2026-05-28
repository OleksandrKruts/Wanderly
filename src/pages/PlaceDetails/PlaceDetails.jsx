import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { places } from "../../data/places";
import BuyForm from "../../components/BuyForm/BuyForm";
import "./placeDetails.css";

const PlaceDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const place = places.find((item) => item.id === Number(id));

  return (
    <div className="details-page">
      {showForm && <BuyForm onClose={() => setShowForm(false)} />}

      <div className="details-layout">
        <div className="details-hero">
          <img src={place.image} alt={place.title} />
        </div>

        <div className="details-content">
          <div className="details-badges">
            <span className="details-type">{place.type}</span>
            <span className="details-rating">★ {place.rating}</span>
          </div>

          <h1 className="details-title">{place.title}</h1>
          <p className="details-description">{place.description}</p>

          <div className="details-sidebar">
            <div className="details-price-block">
              <span className="details-price-label">Price per person</span>
              <span className="details-price">${place.price}</span>
            </div>
            <button
              className="details-buy-btn"
              onClick={() => setShowForm(true)}
            >
              Buy Now
            </button>
            <button
              className="details-back-btn"
              onClick={() => navigate("/places")}
            >
              ← Back to Places
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
