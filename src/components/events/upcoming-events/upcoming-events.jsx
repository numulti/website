import React from 'react';

import LargeEventsCard from '../large-events-card/large-events-card';
import events from '../../../data/events';
import { isToday, isPastDate } from '../../../utils/date-utils';
import './upcoming-events.css';

const UpcomingEvents = () => {
  const displayLimit = 3;

  const isUpcomingEvent = (a) => {
    return (
      !isPastDate(`${a.month} ${a.day}, ${a.year}`) ||
      isToday(`${a.month} ${a.day}, ${a.year}`)
    );
  };

  const sortNewestEventFirst = (a, b) => {
    var dateA = new Date(`${a.month} ${a.day}, ${a.year}`).getTime();
    var dateB = new Date(`${b.month} ${b.day}, ${b.year}`).getTime();
    return dateB - dateA;
  };

  return (
    <div className="horiz-scroll">
      {events
        .filter(isUpcomingEvent)
        .sort(sortNewestEventFirst)
        .map((event, i) => {
          // Shows only 4 upcoming events
          if (i <= displayLimit) {
            return <LargeEventsCard event={event} />;
          }
          return null;
        })}
    </div>
  );
};

export default UpcomingEvents;
