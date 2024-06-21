import axios from '../../api'
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    axios
    .get("/users/search", {params: {limit: 1000}})
    .then(res => {
      setUsers(res.data.data.users);
    })
  }, [])
  return (
    <main>
      {
        users?.map(user => (
          <div key={user.id}>
            <h3>{user.FirstName}</h3>
          </div>
        ))
      }
    </main>
  );
}

export default Users
