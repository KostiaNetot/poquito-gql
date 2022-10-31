import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations/user';

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  
  useEffect(() => {
    if (!loading) setUsers(data.getAllUsers);
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();
    
    newUser({
      variables: {
        input: {
          username, 
          age: Number(age),
        }
      }
    }).then((data) => {
      console.log('addUser data: ', data);
      setUsername('');
      setAge(0);
    }).catch(err => {
      console.error(err);
    });
  };

  const getAll = e => {
    e.preventDefault();
    refetch();
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <h1>GARN stack</h1>
      <form>
        <input onChange={e => setUsername(e.target.value)} value={username} name='username' type='text' />
        <input onChange={e => setAge(e.target.value)} value={age} name='age' type='number' />
        <div className='buttonWrapper'>
          <button onClick={(e) => addUser(e)}>Create</button>
          <button onClick={getAll}>Receive</button>
        </div>
      </form>

      <hr />

      <div>
        {users.length > 0 && (
          users.map(u => (
            <div key={u.id} className='user'>{u.id}. <b>{u.username}</b> {u.age}</div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
