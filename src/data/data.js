import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export const sidebarData = [
    {
        icon: AiOutlineThunderbolt,
        heading: "Energy",
    },
    // {
    //     icon: UilClipboardAlt,
    //     heading: "Orders",
    // },
    {
        icon: BsBoxes,
        heading: "Commodity",
    },
    {
        icon: FaPeopleCarry,
        heading: "Labour/Manpower",
        disabled: true,
        tooltip: "Coming Soon",
    },
    {
        icon: TbTruckDelivery,
        heading: "Supply Chain Data",
        disabled: true,
        tooltip: "Coming Soon",
    },
]

// Dashboard data
// import dashboardData from "../dashboardData.json"
import {dailyCapacityConsumed, monthlyCapacityConsumed, breakdowns,unitsProduced,sales,dailyUnitsConsumed, profit, commodityMetrics } from "../../dashboardData2.js";


export const energyCards = [
    {
        title: "Average runtime per day",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value1: dailyCapacityConsumed[5].value2,
        value2: dailyCapacityConsumed[5].value3,
        image: UilUsdSquare,
        dashboardData: dailyCapacityConsumed[0].tableTwoHeading1 ? monthlyCapacityConsumed : dailyCapacityConsumed,
                series: [
            {
                name: "Runtime",
                data: [8, 7.5, 7, 8, 9, 10],
                // data: ,
            }
        ],
    },
    {
        title: "No. of breakdowns per day",
        color: {
            backGround: "linear-gradient(180deg, #ff919D 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 79,
        value1: breakdowns[5].value3,
        value2: breakdowns[5].value2,
        image: UilMoneyWithdrawal,
        dashboardData: breakdowns,
        series: [
            {
                name: "Revenue",
                data: [1, 2, 0.5, 0, 1, 2],
            }
        ]
    },
    {
        title: "Product Unit Produced",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 73,
        value1: unitsProduced[5].value3,
        value2: unitsProduced[5].value2,
        image: UilClipboardAlt,
        dashboardData: unitsProduced,
        series: [
            {
                name: "Expenses",
                data: [9, 8, 7, 11, 12],
            }
        ]
    },
    {
        title: "Forecasted vs Actual Sales",
        color: {
            backGround: "linear-gradient(to bottom, #7aabe2, #7a54e2)",
            boxShadow: "0px 10px 20px 0px #575f8d"
        },
        barValue: 73,
        value1: sales[5].value2,
        value2: sales[5].value1,
        image: UilClipboardAlt,
        dashboardData: sales,
        series: [
            {
                name: "Expenses",
                data: [1600, 1400, 1450, 1850, 1430, 1600, 1450, 1990, 1400],
            }
        ]
    },
    {
        title: "Daily electricity units consumed",
        color: {
            backGround: "linear-gradient(to bottom, #75df9b, #2878e8)",
            boxShadow: "0px 10px 20px 0px #84ba96"
        },
        barValue: 73,
        value1: dailyUnitsConsumed[5].value2,
        value2: dailyUnitsConsumed[5].value1,
        image: UilClipboardAlt,
        dashboardData: dailyUnitsConsumed,
        series: [
            {
                name: "Expenses",
                data: [150000, 132900, 16500, 145000, 125600],
            }
        ]
    },
    {
        title: "Forecasted vs Actual Profit",
        color: {
            backGround: "linear-gradient(180deg, #9e73ca 0%, #9374c2 50%, #7e73bb 100%)",
            boxShadow: "0px 10px 20px 0px #b8b6e0",
        },
        barValue: 73,
        value1: profit[5].value2,
        value2: profit[5].value1,
        image: UilClipboardAlt,
        dashboardData: profit,
        series: [
            {
                name: "Expenses",
                data: [150000, 132900, 16500, 145000, 125600],
            }
        ]
    },
]

export const commodityCards = [
    {
        title: "Commodity metrics(Oil)",
        color: {
            backGround: "radial-gradient(circle, #f9d9d9, #fb5749)",
            boxShadow: "0px 10px 20px 0px #a5524a"
        },
        barValue: 73,
        value1: commodityMetrics[6].value2,
        value2: commodityMetrics[6].value1,
        image: UilClipboardAlt,
        dashboardData: commodityMetrics,
        series: [
            {
                name: "Expenses",
                data: [124, 143, 126, 134, 132],
            }
        ]
    },
]

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

export const updatesData = [
    {
        image: img3,
        name: "Helery Clint",
        notification: "has ordered Macbook M2 Air",
        time: "23 seconds ago",
    },
    {
        image: img2,
        name: "Raquel Shilon",
        notification: "has ordered Playstation 5 & PS5 Remote controller.",
        time: "4 minutes ago",
    },
    {
        image: img1,
        name: "Thomas Harper",
        notification: "has received FireFox Black Vegan Leather Backpack, 20L",
        time: "12 minutes ago",
    }
]