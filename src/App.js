import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

function App() {

  const [usersList, setUserslist] = useState([]);
  
  const addUserHandler = (name, age) => { //obj desconstruct
    setUserslist((prevUserslist) => {
      return [
        ...prevUserslist,
        {  name, age, id: Math.random().toString() }, // uuid
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
