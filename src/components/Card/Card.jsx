import "./Card.scss";
import React, { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import dashboardData from "../../dashboardData.json";
import Table from "../Table/Table";


const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([])

    // Dashboard data
    const runtimeData = [];
    const breakdowns = [];
    const machinesRunning = [];
    const capacityConsumed = [];
    const dataCorrelation = [];
    const commodityMetrics = [];

    dashboardData.forEach((data) => {
        if (data.parameter == "runtime") {
            runtimeData.push(data);
            console.log("Runtime data", data)
        }
        else if (data.parameter == "breakdowns") {
            breakdowns.push(data);
        }
        else if (data.parameter == "machinesRunning") {
            machinesRunning.push(data);
        }
        else if (data.parameter == "capacityConsumed") {
            capacityConsumed.push(data);
        }
        else if (data.parameter == "dataCorrelation") {
            dataCorrelation.push(data);
        }
        else if (data.parameter == "commodityMetrics") {
            commodityMetrics.push(data);
        }
    })

    const sheetId = import.meta.env.VITE_SHEET_ID
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'dashboard';
    let qu = `Select *`;
    const query = encodeURIComponent(qu);
    const url = `${base}&sheet=${sheetName}&range=${props.range}`;

    useEffect(() => {
        console.log(url);
        const fetchData = async () => {
            fetch(url)
                .then(res => res.text())
                .then(rep => {
                    const jsObj = JSON.parse(rep.substring(47).slice(0, -2));
                    console.log(jsObj);
                })
        }
        fetchData()
    }, [])
    return (
        <AnimateSharedLayout>
            {
                expanded ?
                    (<ExpandedCard
                        sheetData={data}
                        param={props}
                        setExpanded={() => setExpanded(false)}
                    />
                    )
                    :
                    (<CompactCard
                        param={props}
                        setExpanded={() => setExpanded(true)}
                    />
                    )
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpanded }) {
    const Icon = param.image;
    const percentage = param.barValue;
    return (
        <motion.div className="compactCard min-h-[150px]"
            onClick={setExpanded}
            style={{ background: param.color.backGround, boxShadow: param.color.boxShadow }}
            layoutId="expandableCard"
        >
            <div className="radialBar">
                {/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
                <span className="text-lg font-semibold">{param.title}</span>
            </div>
            <div className="flex justify-between items-center">
                {/* <span>Last 24 hours</span> */}
                <span className="text-3xl font-extrabold">{param.value}</span>
                {/* <Icon /> */}
                <span className="">{param.date}</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({ sheetData, param, setExpanded }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                color: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:000Z",
                    "2018-09-19T01:00:000Z",
                    "2018-09-19T02:00:000Z",
                    "2018-09-19T03:00:000Z",
                    "2018-09-19T04:00:000Z",
                    "2018-09-19T05:00:000Z",
                    "2018-09-19T06:00:000Z",
                ],
            }
        },
    }

    return (
        <motion.div className="expandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div>
                <Table data={param.dashboardData} />
            </div>
            <div className="chartContainer">
                <Chart series={param.series} type="area" options={data.options} height="300px" width="500px" />
            </div>
            {/* <span>Last 24 hours</span> */}

        </motion.div>
    )
}

export default Card