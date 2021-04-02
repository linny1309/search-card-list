import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => (
    <div className='card-list'>
        {props.kpis.map(kpi => (
            <Card key={kpi.id} kpi={kpi} />
        ))}
    </div>
);