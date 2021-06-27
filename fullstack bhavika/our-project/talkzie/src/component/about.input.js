import React, { Component } from "react";
import "./home.css"

const Inputs = ({ name, bio , website, value, type, id, error, onChange ,email }) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
      <input 
        className="form-control"
        placeholder={name}
        value={value}
        id={id}
        name={name , username}
        email={email}
        bio={bio}
        website={website}
        type={type}
        onChange={onChange}
        autoComplete={false}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Inputs;