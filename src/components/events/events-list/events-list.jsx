import React from 'react';

import EventsCard from '../events-card/events-card';
import events from '../../../data/events';

const EventsList = () => {
  const displayLimit = 3;

  const sortNewestEventFirst = (a, b) => {
    var dateA = new Date(`${a.month} ${a.day}, ${a.year}`).getTime();
    var dateB = new Date(`${b.month} ${b.day}, ${b.year}`).getTime();
    return dateA - dateB;
  };

  return (
    <>
      {events.sort(sortNewestEventFirst).map((event, i) => {
        //Shows only 4 latest events
        if (i <= displayLimit) {
          return <EventsCard key={i} event={event} />;
        }

        return null;
      })}
    </>
  );
};

export default EventsList;
