import React from 'react'
import Card from './Card/Card'
import { commodityCards } from '../data/data'

const Commodity = ({ range }) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(250px,_90%),_1fr))] gap-4 max-[1200px]:flex-col">
            {
                commodityCards.map((card, index) => {
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

export default Commodity