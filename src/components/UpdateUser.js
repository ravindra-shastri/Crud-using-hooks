import { useState } from 'react';
import {withRouter} from 'react-router-dom';

function UpdateUser(props) {

  let id = props.location.id
  let [name, setName] = useState(
    JSON.parse(localStorage.getItem('data'))[id].name
  );

  let [username, setUsername] = useState(
    JSON.parse(localStorage.getItem('data'))[id].username
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem('data'));
    data[id] = { name, username };
    localStorage.setItem('data', JSON.stringify(data));
    props.history.push('/');
  };

  const handleChange = ({ target }) => {
    let { id } = target.dataset.id;
    if (id === 'name') {
      setName(target.value);
    }
    if (id === 'username') {
      setUsername(target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-content">
        <input
          className="input"
          onChange={handleChange}
          type="text"
          value={name}
          data-id="name"
          placeholder="Enter name" />
        <input
          className="input"
          onChange={handleChange}
          type="text"
          value={username}
          data-id="username"
          placeholder="Enter username" />
        <input
          className="input"
          type="submit"
          value="Update User" />
      </form>
    </div>
  )
}

export default withRouter(UpdateUser);
