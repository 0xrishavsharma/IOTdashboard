import "./Cards.scss";
import React from 'react';
import { cardsData } from "../../data/data";
import Card from "../Card/Card";

const Cards = ({ range }) => {
    return (
        <div className="cards">
            {
                cardsData.map((card, index) => {
                    return (
                        <div className="parentContainer" key={index}>
                            <Card
                                range={range}
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value={card.value}
                                date={card.date}
                                dashboardData={card.dashboardData}
                                image={card.image}
                                series={card.series}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards