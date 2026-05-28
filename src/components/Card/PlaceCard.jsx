import "./placeCard.css";

const PlaceCard = ({ place, onClick }) => {
  return (
    <div className="place-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={place.image} alt={place.title} />
      </div>

      <div className="info-place">
        <h3 className="place-title">{place.title}</h3>
        <div className="place-meta">
          <span className="place-type">{place.type}</span>
          <span className="place-rating">
            <span className="place-rating-star">★</span> {place.rating}
          </span>
        </div>
        <p className="place-price">
          {place.price}$ <span>/ person</span>
        </p>
      </div>
    </div>
  );
};

export default PlaceCard;
