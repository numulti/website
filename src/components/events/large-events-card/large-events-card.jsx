import React from 'react';
import { getAbbrvMonth } from '../../../utils/date-utils';
import DynamicLink from '../../dynamic-link/dynamic-link';
import './large-events-card.css';

const LargeEventsCard = ({ event }) => {
  const {
    name,
    series,
    description,
    day,
    month,
    year,
    time,
    photo,
    location,
    cancelled,
  } = event;

  var path = '../../../images/';

  var image = 'event-02-10-2021.png';

  if (photo != null) {
    image = photo;
  }

  path = path + image;

  return (
    <>
      {
        <div className="large-event">
          <img src={require('../../../images/event-02-10-2021.png')} />
          <div className="large-event-gradient">
            <div className="large-event-sections">
              <div>
                <div className="large-event-title">
                  <h4>{name}</h4>
                </div>
                <p className="large-event-description">{description}</p>
              </div>
              <div className="large-event-date">
                <div className="large-event-date-content">
                  <h4>
                    {getAbbrvMonth(month)} {day}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default LargeEventsCard;
