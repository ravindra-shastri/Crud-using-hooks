import { useState } from 'react';

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    addUser(name, username);
    setName("");
    setUsername("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-content">
        <input
          className="input"
          onChange={(event) => (setName(event.target.value))}
          type="text"
          value={name}
          data-id={name}
          placeholder="Enter your name" />
        <input
          className="input"
          onChange={(event) => (setUsername(event.target.value))}
          type="text"
          value={username}
          placeholder="Enter your username" />
        <input
          className="input"
          type="submit"
          value="Add User" />
      </form>
    </div>
  )
}

export default AddUser;