import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./exercise.css";

export default function Exercise() {
  let [userId, setUserId] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();
  // const navigate = useNavigate();
  // let { _id } = useParams();
 
  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/users/:_id/exercises", {
        userId,
        description,
        duration,
        date,
      })
      .then((response) => console.log("Here is the response", response))
      .catch((error) => console.log("An error occured", error));

    // navigate(`./api/users/:${_id}/exercises`);
  };

  return (
    <div className="exercise">
      <h2>Add exercise</h2>
      <p>POST /api/users/:_id/exercsie</p>
      <form className="input-filds">
        <input
          name="id"
          value={userId}
          placeholder=":_id"
          type="text"
          onChange={(event) => {
            setUserId(event.target.value);
          }}
        />
        <input
          name="text"
          value={description}
          type="text"
          placeholder="description*"
          onChange={(desc) => {
            setDescription(desc.target.value);
          }}
        />
        <input
          name="duration"
          value={duration}
          type="number"
          placeholder="duration* (mins.)"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <input
          name="date"
          value={date}
          type="text"
          placeholder="date (yyyy-mm-dd)"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <button className="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}