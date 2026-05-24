import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="overlay" />

      <div className="content">
        <h1>Travel Explorer</h1>
        <p>Discover travelers from around the world</p>

        <button onClick={() => navigate("/travelers")}>
          Explore Travelers
        </button>
      </div>
    </div>
  );
};

export default Home;
