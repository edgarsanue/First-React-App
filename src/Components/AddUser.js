import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUsernage] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserage < 0) {
      setError({
        title: "Invalidd Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // o sinal de mais acima garante que seja number ao invés de string
    console.log(enteredUsername, enteredUserage);

    props.onAddUser(enteredUsername, enteredUserage);
    setEnteredUsername("");
    setEnteredUsernage("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const AgeChangeHandler = (e) => {
    setEnteredUsernage(e.target.value);
  };

  const modalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          modalTitle={error.title}
          message={error.message}
          onConfirm={modalHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">User Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserage}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
