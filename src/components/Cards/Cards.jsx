import "./Cards.scss";
import React from 'react';
import { cardsData } from "../../data/data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards">
        {
            cardsData.map((card, index) => {
                return(
                    <div className="parentContainer" key={index}>
                        <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
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