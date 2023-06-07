import React, { useEffect, useState } from "react";

const LiveData = () => {
	const [data, setData] = useState([]);

	function WebSocketAPI() {
		var token =
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWdoYXZAZXF1aWRlaS5jb20iLCJ1c2VySWQiOiJkYzQwODBiMC1lNzUzLTExZWQtYTQwMi05MWI4ZjM0Yzc2ZTEiLCJzY29wZXMiOlsiQ1VTVE9NRVJfVVNFUiJdLCJzZXNzaW9uSWQiOiI3NThiNTczZS00N2VjLTRiZTgtYmRiMy0xOWFiMjRlY2ZhM2MiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY4NTk1Mzk4MywiZXhwIjoxNjg2MDQwMzgzLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMTEyZjQ2ZjAtMmJlYy0xMWVjLWI1NGEtNTE3MGFiZWE5NDJkIiwiY3VzdG9tZXJJZCI6ImZkZTgzZTEwLWQzOTAtMTFlYy05ZDk5LTUxOTdhODE4MDVjZiJ9.7MhBT4lPc2KQ8H7PNib-hvnzodeke-BgyXOcuXhAxXTRY6ZiRxLM_ikUgBppgB5BPW2uZFGd4j2jjf1ncwM2WA";
		var entityId = "cac8a830-c1fc-11ec-9d99-5197a81805cf";
		var webSocket = new WebSocket(
			"ws://flowlinc.io:8080/api/ws/plugins/telemetry?token=" + token
		);
		webSocket.onopen = function () {
			var object = {
				tsSubCmds: [
					{
						entityType: "DEVICE",
						entityId: entityId,
						scope: "LATEST_TELEMETRY",
						cmdId: 10,
					},
				],
				historyCmds: [],
				attrSubCmds: [],
			};
			var data = JSON.stringify(object);
			webSocket.send(data);
			console.log("Connection is opened with data:", data);
		};

		webSocket.onmessage = function (event) {
			var res = event.data;
			var received_msg = JSON.parse(res);
			// console.log((Object.entries(received_msg.latestValues).splice(0, 5)))
			const lastUpdatedHour = new Date(
				received_msg.data.hourly_consumption_kWh[0][0]
			);
			console.log("Last updated(hourly) at:", lastUpdatedHour);
			setData(received_msg.data);
		};

		webSocket.onclose = function (event) {
			// alert("Connection is closed!");
			console.log("Connection is closed!");
		};
	}

	const liveData = [
		{
			name: "Hourly Consumption Data(kWh)",
			value: 0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Hourly Generation",
			value: 0.0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Hourly Net",
			value: 0.0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Daily Consumption",
			value: 0.0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Daily Generation",
			value: 0.0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Daily Net",
			value: 0.0,
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
	];

	return (
		<div>
			{/* <button
				onClick={WebSocketAPI}
				className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
				Fetch Data
			</button> */}

			<div className="flex gap-4 mt-4">
				{liveData.map((item, i) => (
					<div
						key={i}
						className="flex-[1] px-4 py-2 text-black bg-[#ffffff66] border-[1px] border-[#0000000d] rounded-md h-26 ">
						<h1></h1>
						<h2 className="text-sm">{item.name}</h2>
						<h1>{item.type}</h1>
						<h1>{item.value}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default LiveData;
