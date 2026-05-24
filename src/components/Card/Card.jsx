import "./card.css";

const Card = ({ name, email, onClick }) => {
  const initials = (name || "")
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="card">
      <div className="avatar">{initials}</div>

      <div className="info">
        <h3 className="name">{name || "Unknown user"}</h3>
        <p className="email">{email || "No email"}</p>
      </div>

      <button className="btn" onClick={onClick}>
        View profile
      </button>
    </div>
  );
};

export default Card;
