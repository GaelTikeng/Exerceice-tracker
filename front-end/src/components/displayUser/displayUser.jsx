import React from "react";
import './displayUser.css'


export default function DisplayUser () {
  const rawData = JSON.parse(localStorage.getItem('exerciseUser'))

  return (
    <div>
      {JSON.stringify(rawData)}
    </div>
  )
}