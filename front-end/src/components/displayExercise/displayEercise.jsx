import React from "react";


import './displayExercise.css';


export default function DisplayExercise () {

  const addExercise = JSON.parse(localStorage.getItem("addExercise"))

  return (
    <div className="result">
      {JSON.stringify(addExercise)}
    </div>
  )
}