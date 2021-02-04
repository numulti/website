import React from 'react';
import { getAbbrvMonth } from '../../../utils/date-utils';
import DynamicLink from '../../dynamic-link/dynamic-link';
import './large-events-card.css'

const LargeEventsCard = ({event}) => {
    const {
        name,
        series,
        description,
        day,
        month,
        year,
        time,
        location,
        cancelled,
      } = event;

    return (
        <>
        {
            <div className="large-event">
            <div className="large-event-gradient">
            <div className="large-event-sections">
            <div>
            <div className="large-event-title">
            <h4>{name}</h4>
            </div>
            <p>{description}</p>
            </div>
            <div className="large-event-date">
            <div className="large-event-date-content">
            <h4>{getAbbrvMonth(month)} {day}</h4>
            </div>
            </div>
            </div>
            </div>
            </div>
        }
        </>
    );

}

export default LargeEventsCard;