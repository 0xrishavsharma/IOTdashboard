import "./MainDash.scss";
import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import EnergyTab from "../EnergyTab";
import CommodityTab from "../CommodityTab";
import ManPower from "../ManPower";
import SupplyChain from "../SupplyChain";
import LiveData from "../LiveData";
import textLogo from "../../img/logo/logoText.png";
import imgLogo from "../../img/logo/logoImg.png";
const MainDash = ({ currentTab }) => {
	// const range = ['B1:C7', 'B11:C17', 'B21:D25', 'B29:D38', 'B42:E47', 'B51:D56']

	return (
		<div className="mainDash">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1">
					<img src={imgLogo} className="w-auto h-12 mb-1" alt="" />
					<img src={textLogo} className="w-auto h-8" alt="" />
				</div>
				<div className="right-0 flex gap-4 text-3xl ">
					<span className="font-bold">EWS Score:</span>
					<span className="font-bold text-purple-700">878</span>
				</div>
			</div>
			{/* {currentTab === "Energy" ? <EnergyTab /> : <CommodityTab />} */}
			<div className="relative flex justify-between">
				<div className="flex flex-col gap-3">
					<h1 className="relative pl-3 text-3xl font-black before:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						Live Data
					</h1>
					<LiveData />
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<h1 className="relative pl-3 text-3xl font-black before:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-1">
					Energy
				</h1>
				<EnergyTab />
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="relative pl-3 text-3xl font-black before:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-1">
					Commodity
				</h1>
				<CommodityTab />
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="flex items-center gap-3">
					<span className="relative pl-3 text-3xl font-black before:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						Man Power
					</span>
					<span className="self-end mb-1 opacity-80">(coming soon...)</span>
				</h1>
				<ManPower />
			</div>
			<div className="flex flex-col gap-3 cursor-not-allowedddds">
				<h1 className="flex gap-3">
					<span className="relative pl-3 text-3xl font-black before:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						{" "}
						Supply chain
					</span>
					<span className="self-end mb-1 opacity-80 ">(coming soon...)</span>
				</h1>
				<SupplyChain />
			</div>
		</div>
	);
};

export default MainDash;
