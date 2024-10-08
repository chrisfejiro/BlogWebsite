// import { useState } from 'react'
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import { selectSignedIn } from "./Feature/userSlice";
import "./Styling/app.css"
function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div >
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  )
}


export default App
