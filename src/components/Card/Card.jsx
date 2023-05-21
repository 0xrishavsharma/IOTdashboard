import "./Card.scss";
import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import {
	dailyCapacityConsumed,
	monthlyCapacityConsumed,
	breakdowns,
	unitsProduced,
	sales,
	dailyUnitsConsumed,
	profit,
	commodityMetrics,
} from "../../../dashboardData2";

const Card = ({ data }) => {
	const [expanded, setExpanded] = useState(false);
	// const [data, setData] = useState([]);

	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard
					// sheetData={data}
					data={data}
					setExpanded={() => setExpanded(false)}
				/>
			) : (
				<CompactCard data={data} setExpanded={() => setExpanded(true)} />
			)}
		</AnimateSharedLayout>
	);
};

function CompactCard({ data, setExpanded }) {
	// const Icon = data.image;
	// const percentage = data.barValue;
	console.log("CompactCard data: ", data);
	return (
		<motion.div
			className="compactCard min-h-[150px]"
			onClick={setExpanded}
			style={{
				background: data.color.backGround,
				boxShadow: data.color.boxShadow,
			}}
			layoutId="expandableCard">
			<div className="radialBar">
				{/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
				<span className="text-lg font-semibold">{data.title}</span>
			</div>
			<div className="flex items-center justify-between">
				{/* <span>Last 24 hours</span> */}
				<span className="text-3xl font-extrabold">{data.value1}</span>
				{/* <Icon /> */}
				<span className="">{data.value2}</span>
			</div>
		</motion.div>
	);
}

function ExpandedCard({ sheetData, data, setExpanded }) {
	console.log("Param.series", data.xaxis);
	const options = {
		series: [
			{
				name: "Net Profit",
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: "Revenue",
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: "Free Cash Flow",
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "45%",
				endingShape: "rounded",
			},
		},
		dataLabels: {
			enabled: true,
		},
		stroke: {
			show: false,
			width: 2,
			colors: ["transparent"],
		},
		// xaxis: data.xaxis,
		// yaxis: data.yaxis,
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands";
				},
			},
		},
	};

	// const chart = new ApexCharts(document.querySelector("#chart"), options);
	// chart.render();
	const dummyArray = [1, 2];
	return (
		<motion.div
			className="expandedCard"
			style={{
				background: data.color.backGround,
				boxShadow: data.color.boxShadow,
			}}
			layoutId="expandableCard">
			<div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
				<UilTimes onClick={setExpanded} />
			</div>
			<span>{data.title}</span>
			<div>
				<Table data={data.dashboardData} />
			</div>
			<div className="flex gap-12 ">
				{data.series.map((item, i) => {
					return (
						<div key={i} className="chartContainer">
							{console.log(`${i}. Logging data`)}
							<Chart
								series={data.series[i] ? data.series[i] : data.series}
								type="bar"
								options={options}
								// height="350px"
								xaxis={data.xaxis[i] ? data.xaxis[i] : data.xaxis}
								yaxis={data.yaxis[i] ? data.yaxis[i] : data.yaxis}
								title={data.yaxis[i].title.text}
								width="400px"
								id="chart"
							/>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
}

export default Card;
