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

export const sidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    // {
    //     icon: UilClipboardAlt,
    //     heading: "Orders",
    // },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
]

// Dashboard data
import dashboardData from "../dashboardData.json"

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

export const cardsData = [
    {
        title: "Average Runtime per day",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "10hrs",
        date: "11/05/23",
        image: UilUsdSquare,
        dashboardData: runtimeData,
        series: [
            {
                name: "Sales",
                data: [8, 7.5, 7, 8, 9, 10],
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
        value: "2",
        date: "11/05/23",
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
        title: "Avg. no of machines running per day",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 73,
        value: "11hrs",
        date: "DDD",
        image: UilClipboardAlt,
        dashboardData: machinesRunning,
        series: [
            {
                name: "Expenses",
                data: [9, 8, 7, 11, 12],
            }
        ]
    },
    {
        title: "Avg. capacity consumed per day",
        color: {
            backGround: "linear-gradient(to bottom, #7aabe2, #7a54e2)",
            boxShadow: "0px 10px 20px 0px #575f8d"
        },
        barValue: 73,
        value: "1400",
        date: "11/05/23",
        image: UilClipboardAlt,
        dashboardData: capacityConsumed,
        series: [
            {
                name: "Expenses",
                data: [1600, 1400, 1450, 1850, 1430, 1600, 1450, 1990, 1400],
            }
        ]
    },
    {
        title: "GST & Energy data correlation co-efficient",
        color: {
            backGround: "linear-gradient(to bottom, #75df9b, #2878e8)",
            boxShadow: "0px 10px 20px 0px #84ba96"
        },
        barValue: 73,
        value: "₹1,25,600",
        date: "01/01/23",
        image: UilClipboardAlt,
        dashboardData: dataCorrelation,
        series: [
            {
                name: "Expenses",
                data: [150000, 132900, 16500, 145000, 125600],
            }
        ]
    },
    {
        title: "Commodity metrics",
        color: {
            backGround: "radial-gradient(circle, #f9d9d9, #fb5749)",
            boxShadow: "0px 10px 20px 0px #a5524a"
        },
        barValue: 73,
        value: "AAAA",
        date: "01/01/23",
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