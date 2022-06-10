import "./Sidebar.scss";
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { sidebarData } from "../../data/data";
import { useState } from "react";

const Sidebar = () => {

  const[selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
        <div className="logo">
            <img src="" alt="" />
            <h4><span>z</span>Dash</h4>
            {/* <h4>zDash</h4> */}
            <span>The ultimate dashboard</span>
        </div>
        <div className="menu">
            {
              sidebarData.map((item, index)=>{
                return(
                  <div className={selected===index?"menuItem active":"menuItem"} onClick={() => {setSelected(index)}} key={index}>
                      <item.icon />
                      <span>{item.heading}</span>
                  </div>
                )
              })
            }
            <div className="menuItem">
              <UilSignOutAlt />
            </div>
        </div>
    </div>
  )
}

export default Sidebar