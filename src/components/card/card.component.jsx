import React from 'react';
import './card.styles.css'

const netColor = (net) => {
    if (net < 0) 
        return "red"
    else if (net > 0)
        return "green"
    else 
        return "gray"
}

export const Card = (props) => (
    <div>
        <div className="card-container">
            <div className="justify-content-center">
            </div>
            <div className="justify-content-center">
                <p className="text-align-center font-weight-bold"> {props.kpi.name} </p> 
            </div>
            <div className="justify-content-center">         
                <p> {props.kpi.type} </p> 
            </div>
            <div className="kpi-score"> Score {props.kpi.score}</div> 
            <div style={{backgroundColor: netColor(props.kpi.net)}} className="kpi-net"> Net {props.kpi.net}</div>
        </div>
    </div>
)