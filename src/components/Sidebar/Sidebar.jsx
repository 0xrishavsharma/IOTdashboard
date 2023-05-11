import "./Sidebar.scss";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { sidebarData } from "../../data/data";
import { useState } from "react";
import logoText from "../../img/logo/logoText.png"
import logoImg from "../../img/logo/logoImg.png"

const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
      <div className="logo flex items-center gap-1">
        <img src={logoImg} className="h-10" alt="" />
        <img src={logoText} className="w-28 h-6 mt-1" alt="" />
      </div>
      <h4 className="pr-6 mt-3 text-end">IOT Dashboard</h4>
      <div className="menu">
        {
          sidebarData.map((item, index) => {
            return (
              <div className={selected === index ? "menuItem active" : "menuItem"} onClick={() => { setSelected(index) }} key={index}>
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