import React from 'react';

import EventCard from '../event-card/event-card';

const EventsList = ({ events }) => {
  const sortNewestFirst = (a, b) => {
    var dateA = new Date(
      `${a.node.month} ${a.node.day}, ${a.node.year}`
    ).getTime();
    var dateB = new Date(
      `${b.node.month} ${b.node.day}, ${b.node.year}`
    ).getTime();
    return dateB - dateA;
  };

  return (
    <section>
      {events.sort(sortNewestFirst).map((event, i) => {
        //Shows only 4 latest events
        if (i <= 3) {
          return <EventCard key={i} event={event} />;
        }
      })}
    </section>
  );
};

export default EventsList;
