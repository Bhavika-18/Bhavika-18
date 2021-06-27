import React, { Component } from "react";
import "./home.css"

const Input = ({ name, value, type, id, error, onChange , firstname, lastname,email }) => {
  return (
    <div className="form-group">
      <input 
        className="form-control"
        placeholder={name}
        value={value}
        id={id}
        name={name , lastname , firstname }
        email={email}
        type={type}
        onChange={onChange}
        autoComplete={false}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;