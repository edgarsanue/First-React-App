import React from "react";
import Card from "./Card";


const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.addedUsers.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
