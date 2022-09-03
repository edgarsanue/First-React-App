import React, { useState } from "react";

import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

function App() {
  const [usersList, setUserslist] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUserslist) => {
      return [
        ...prevUserslist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList addedUsers={usersList} />
    </div>
  );
}

export default App;
