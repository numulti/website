import React from 'react';

import EventCard from '../event-card/event-card';

const EventsList = ({ events }) => {
  const displayLimit = 3;

  const sortNewestEventFirst = (a, b) => {
    var dateA = new Date(
      `${a.node.month} ${a.node.day}, ${a.node.year}`
    ).getTime();
    var dateB = new Date(
      `${b.node.month} ${b.node.day}, ${b.node.year}`
    ).getTime();
    return dateB - dateA;
  };

  return (
    <>
      {events.sort(sortNewestEventFirst).map((event, i) => {
        //Shows only 4 latest events
        if (i <= displayLimit) {
          return <EventCard key={i} event={event} />;
        }
      })}
    </>
  );
};

export default EventsList;
