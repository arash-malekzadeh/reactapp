import React, { useEffect, useState } from "react";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);
  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      if (result?.users) {
        setUsersList(result?.users);
        setPending(false);
      } else {
        setUsersList([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleFetchUsers = () => {
    fetchAllUsers();
  };
  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);
  console.log(usersList);

  if (pending) return <h1> Wainting Users Fetching</h1>;
  return (
    <div>
      Users Lists
      <button onClick={handleFetchUsers}> show Users</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((user) => (
            <li key={user?.id}>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>no users</h1>
        )}
      </ul>
    </div>
  );
};

export default Users;
