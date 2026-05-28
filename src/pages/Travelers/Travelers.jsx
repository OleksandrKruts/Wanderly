import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTravelers } from "../../api/travelers.api";
import "./travelers.css";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Travelers = () => {
  const [travelers, setTravelers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await getTravelers();
        setTravelers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  if (loading) {
    return (
      <div className="state-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="state error">Error: {error}</p>;
  }

  return (
    <div className="travelers-page">
      <h1 className="travelers-title">Travelers</h1>

      <div className="travelers-grid">
        {travelers.slice(0, visibleCount).map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={() => navigate(`/travelers/${user.id}`)}
          />
        ))}
      </div>

      {visibleCount < travelers.length && (
        <div className="show-more-wrapper">
          <button className="show-btn" onClick={showMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Travelers;
