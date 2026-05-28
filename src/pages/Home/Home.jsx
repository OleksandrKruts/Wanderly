import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <span className="home-badge">Explore the World</span>
        <h1 className="home-title">Wanderly</h1>
        <p className="home-subtitle">
          Discover places, meet travelers, and plan your next adventure
        </p>
        <div className="home-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/travelers")}
          >
            Meet Travelers
          </button>
          <button
            className="home-btn-secondary"
            onClick={() => navigate("/places")}
          >
            Explore Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
