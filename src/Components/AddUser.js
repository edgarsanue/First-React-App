import React, { useState, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

function AddUser(props) {
  const nameImputRef = useRef();
  const ageImputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameImputRef.current.value;
    const enteredAge = ageImputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+enteredAge < 0) {
      // converter para number
      setError({
        title: "Invalidd Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    // Manipular o DOM com refs somente no exemplo abaixo
    nameImputRef.current.value = "";
    ageImputRef.current.value = "";
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
          onConfirm={modalHandler} // onclose.....
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameImputRef} />
          <label htmlFor="age">User Age (Years)</label>
          <input id="age" type="number" ref={ageImputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
