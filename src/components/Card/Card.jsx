import "./Card.scss";
import React, { useState } from 'react';
import { cardsData } from "../../data/data";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        {
            expanded ? 
                (   <ExpandedCard 
                        param={props} 
                        setExpanded={()=> setExpanded(false)}
                    />
                ) 
                : 
                (   <CompactCard 
                        param={props} 
                        setExpanded={()=> setExpanded(true)}   
                    /> 
                )
        }
    </AnimateSharedLayout>
  )
}

function CompactCard( {param, setExpanded} ){
    const Icon = param.image;
    const percentage = param.barValue;
    return(
        <div className="compactCard" onClick={setExpanded} style={{ background: param.color.backGround, boxShadow: param.color.boxShadow }}>
            <div className="radialBar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Icon />
                <span>${param.value}</span>
                <span>Last 24 hours</span>

            </div>
        </div>
    )
}

function ExpandedCard()

export default Card