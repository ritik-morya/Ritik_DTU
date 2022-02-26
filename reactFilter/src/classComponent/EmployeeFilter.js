import React, { useState } from 'react';

import './App.css';

const USERS = [
  { id: 1, name: 'Aman', age: 32, location:"delhi",salary:20000},
  { id: 2, name: 'Akash', age: 30 , location:"mumbai",salary:30000},
  { id: 3, name: 'Tanuj', age: 40 , location:"delhi",salary:40000},
  { id: 4, name: 'Tanya', age: 50 , location:"mumbai",salary:40000},
  { id: 5, name: 'ritik', age: 30, location:"delhi",salary:50000 },
  { id: 6, name: 'Anuj', age: 68 , location:"culcatta",salary:60000},
  { id: 7, name: 'rekha', age: 34 , location:"rajasthan",salary:70000},
  { id: 8, name: 'renu', age: 28, location:"chennai",salary:80000 },
  
];

function App() {
  
  const [name, setName] = useState('');

  
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
     
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
              <span className="user-location">{user.location}</span>
              <span className="user-age">{user.salary}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;