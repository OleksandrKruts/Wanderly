import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getTravelerById } from "../../api/travelers.api";
import "./travelerDetails.css";
import Loader from "../../components/Loader/Loader";

const TravelerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [traveler, setTraveler] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await getTravelerById(id);
        setTraveler(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="state error">Error: {error}</p>;
  if (!traveler) return null;

  const info = [
    { label: "Phone", value: traveler.phone },
    { label: "Website", value: traveler.website },
    { label: "Company", value: traveler.company.name },
    { label: "City", value: traveler.address.city },
  ];

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar-large">
          {traveler.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        <h1>{traveler.name}</h1>
        <p className="email">{traveler.email}</p>

        <div className="info-grid">
          {info.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="Reward-btn">
          <button className="btn" onClick={() => navigate(`/travelers`)}>
            Back to Travelers
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelerDetails;
