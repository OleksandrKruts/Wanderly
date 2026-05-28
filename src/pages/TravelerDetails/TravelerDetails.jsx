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

  const fullName = `${traveler.firstName} ${traveler.lastName}`;

  const initials = traveler.firstName[0] + traveler.lastName[0];

  const info = [
    { label: "Phone", value: traveler.phone },
    { label: "Company", value: traveler.company?.name },
    { label: "City", value: traveler.address?.city },
    { label: "Email", value: traveler.email },
  ];

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar-large">{initials}</div>

        <h1>{fullName}</h1>
        <p className="email">{traveler.email}</p>

        <div className="info-grid">
          {info.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <p>{item.value || "—"}</p>
            </div>
          ))}
        </div>

        <button className="rev-btn" onClick={() => navigate("/travelers")}>
          Back to Travelers
        </button>
      </div>
    </div>
  );
};

export default TravelerDetails;
