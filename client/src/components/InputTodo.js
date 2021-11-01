import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState(""); // React hook State = description, setState = setDescription

  const onSubmitForm = async (e) => {
    e.preventDefault(); //for not refresh
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        //database port
        method: "POST", //this method to insert data to database
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-success">ADD</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
