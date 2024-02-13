import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUser = () => {

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/users');
      setUsers(res.data.users);
      console.log
    } catch (error) {
      setError('Error fetching users');
    }
  };

  const onChangeUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/users', {
        username: username
      });
      setUsername('');
      getUsers();
    } catch (error) {
      setError('Error creating user');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/api/users/${id}`);
      getUsers();
    } catch (error) {
      setError('Error deleting user');
    }
  };
  
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className='row'>
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create New User</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                value={username}
                type="text"
                className="form-control"
                onChange={onChangeUsername}
              />
              <br />
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {users.map(user => (
            <li
              className="list-group-item list-group-item-action"
              key={user._id}
              onDoubleClick={() => deleteUser(user._id)}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateUser;