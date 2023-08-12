import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

export default function User() {
  const [users, setUsers] = useState({
    username: "",
  });
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    let rawData = null
    axios
      .post("http://localhost:3000/api/users", { users })
      .then((response) => {
        rawData = response.data
        localStorage.setItem("exerciseUser", JSON.stringify(rawData))
        navigate('./api/users');
      })
      .catch((error) => console.log("An error occured", error));

    
    
  };

  return (
    <div className="user">
      <h2>Create New Users</h2>
      <p>POST /api/users</p>
      <div className="two-items">
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={(e) => {
            setUsers({ username: e.target.value });
          }}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
