import "./MainDash.scss";
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {

  // const range = ['B1:C7', 'B11:C17', 'B21:D25', 'B29:D38', 'B42:E47', 'B51:D56']
  const range = ['B1:C7']

  return (
    <div className="mainDash">
      {/* <h1>Dashboard</h1> */}
      <Cards range={range} />
      {/* <Table /> */}
    </div>
  )
}

export default MainDash;