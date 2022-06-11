import { UilEstate, 
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
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
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

export const cardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "190,000",
        image: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #ff919D 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 79,
        value: "129,461",
        image: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 73,
        value: "61,198",
        image: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
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