import React from 'react';
import Energy from './Energy';
import Commodity from './Commodity';

const Cards = ({ range, currentTab }) => {
    return (
        // <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(250px,_90%),_1fr))] gap-4 max-[1200px]:flex-col">
        <div>
            {
                currentTab === "Energy" ?
                    <Energy range={range} />
                    :
                    <Commodity range={range} />
            }
        </div>
    )
}

export default Cards