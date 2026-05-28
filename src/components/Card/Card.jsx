import "./card.css";

const Card = ({ user, onClick }) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = user.firstName[0] + user.lastName[0];

  return (
    <div className="card">
      <div className="avatar">{initials}</div>

      <div className="card-info">
        <h3>{fullName}</h3>
        <p>{user.email}</p>
      </div>

      <button className="btn-primary" onClick={onClick}>
        View profile
      </button>
    </div>
  );
};

export default Card;
