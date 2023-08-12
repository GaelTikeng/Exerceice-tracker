import React from "react";
import User from "../../users/user";
import Exercise from "../../exercise/exercise";
import './forms.css';


export default function Forms () {



  return (
    <>
      <h1>Exercise tracker</h1>
      <div className="two-blocks">
        <User/>
        <Exercise/>
      </div>
      <div className="small-text">
        <h3>GET user's exercise log: </h3>
        <p>GET /api/users/:_id?[from][&to][&limit]</p>
      </div>
      <span>[] = optional</span>
      <span><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</span>
    </>
    
  )
}
