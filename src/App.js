import { useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';
function App() {

  let [data, setData] =
    useState(JSON.parse(localStorage.getItem('data')) || []);

  const addUser = (name, username) => {
    setData(data.concat({ name, username }));
    localStorage.setItem('data', JSON.stringify(data.concat({ name, username })));
  };

  const deleteUser = (i) => {
    let newData = [...data];
    newData.splice(i, 1);
    localStorage.setItem('data', JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="App">
      <h1>List Of User</h1>
      <hr />
      <AddUser addUser={addUser} />
      <div>
        {data.length !== 0 && (
          <div>
            {data.length > 1 
            ? `${data.length} User added` 
            : `${data.length} User added`}{''}
          </div>
        )
        }
        {data.map((user, i) => (
          <User key={i} i={i} user={user} username={user.username} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  );
}

export default App;




