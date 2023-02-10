import { listenerCount } from 'process';
import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
const [users, setUsers] = useState([]);

const getUsers = async() =>{
  const response = await fetch(url)
  const users = await response.json();
  setUsers(users)
  // console.log(users);
}
// console.log('hi');
useEffect(()=>{
  getUsers();
},[]);
  return <>
      <h3>Git hub users</h3>
      <ul className="users">
      {users.map((user)=>{
        const {id,login,avatar_url,html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt="" />
          <div>
            <h4>
              {login}
            </h4>
          </div>
        </li>
      })}
      </ul>
  </>
};

export default UseEffectSecondArgument;
