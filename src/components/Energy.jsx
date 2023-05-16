import React from 'react';
import { energyCards } from '../data/data';
import Card from './Card/Card';


const Energy = ({ range }) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(250px,_90%),_1fr))] gap-4 max-[1200px]:flex-col">
            {
                energyCards.map((card, index) => {
                    return (
                        <div className="w-full" key={index}>
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

export default Energy