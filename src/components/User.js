import { Link } from "react-router-dom";

function User({ i, user, username, deleteUser }) {
  return (
    <div className="user-container">
      <div>

        <h2 className="user-name">
          <span className="user-index">
            {i + 1}.
          </span>
          {user.name}
        </h2>
        <p className="username">
          {user.username}
        </p>
      </div>
      <Link to="/edit">
        <button className="edit-btn">
          Edit
        </button>
      </Link>
      <span className="delete-btn"
        onClick={() =>
          deleteUser(i)}>
        X
      </span>
    </div>

  )
}
export default User;
