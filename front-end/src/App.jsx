import User from './users/user'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DisplayExercise from './components/displayExercise/displayEercise';
import DisplayUser from './components/displayUser/displayUser';
import './App.css'

import Exercise from './exercise/exercise'

function App() {

  return (
    // <div className="all">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element = {<User/> }></Route>
    //       {/* <Route path='/' element={<Exercise/>}></Route> */}
    //       <Route path='/api/users' element = {<User/>}></Route>
    //       <Route path='/api/users/:_id/exercises' element={<Exercise/>}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    
    <div>
      <h1>Exercise tracker</h1>
      <div  className='two-blocks'>
        <User/>
        <Exercise/>
      </div>
      <div className="small-text">
        <h3>GET user's exercise log: </h3>
        <p>GET /api/users/:_id?[from][&to][&limit]</p>
      </div>
      <span>[] = optional</span>
      <span><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</span>
      <Router>
        <Routes>
          <Route path ='/api/users' element = {DisplayUser} />
          <Route path = '/api/users/:_id/exercises' element = {DisplayExercise} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
