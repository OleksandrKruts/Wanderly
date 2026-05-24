import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTravelers } from "../../api/travelers.api";
import "./travelers.css";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Travelers = () => {
  const [travelers, setTravelers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
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
    setVisibleCount((prev) => prev + 10);
  };

  if (loading) return <Loader />;
  if (error) return <p className="state error">Error: {error}</p>;

  return (
    <div className="page">
      <h1 className="title">Travelers</h1>

      <div className="grid">
        {travelers.slice(0, visibleCount).map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            onClick={() => navigate(`/travelers/${user.id}`)}
          />
        ))}
      </div>
      {visibleCount < travelers.length && (
        <button className="btn show-btn" onClick={showMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Travelers;
