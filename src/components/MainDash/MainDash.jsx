import "./MainDash.scss";
import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import EnergyTab from "../EnergyTab";
import CommodityTab from "../CommodityTab";
const MainDash = ({ currentTab }) => {
	// const range = ['B1:C7', 'B11:C17', 'B21:D25', 'B29:D38', 'B42:E47', 'B51:D56']

	return (
		<div className="mainDash">
			{currentTab === "Energy" ? <EnergyTab /> : <CommodityTab />}
		</div>
	);
};

export default MainDash;
