import "./Card.scss";
import React, { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import { dailyCapacityConsumed,monthlyCapacityConsumed, breakdowns, unitsProduced, sales, dailyUnitsConsumed, profit, commodityMetrics } from "../../../dashboardData2";

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([])

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
            <div className="flex items-center justify-between">
                {/* <span>Last 24 hours</span> */}
                <span className="text-3xl font-extrabold">{param.value1}</span>
                {/* <Icon /> */}
                <span className="">{param.value2}</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({ sheetData, param, setExpanded }) {
  
    var options = {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    
    
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
                {
                     <Table data={param.dashboardData} />
                }
            </div>
            <div className="chartContainer">
                <Chart series={param.series} type="bar" options={options} height="300px" width="500px" id="chart" />
            </div>
        </motion.div>
    )
}

export default Card