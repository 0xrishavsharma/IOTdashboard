import "./MainDash.scss";
import React from 'react'
import Cards from "../Cards/Cards";

const Maindash = () => {
  return (
    <div className="maindash">
        <h1>Dashboard</h1>
        <Cards />
    </div>
  )
}

export default Maindash;