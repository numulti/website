import React from 'react';

import EventCard from '../event-card/event-card.component';

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
    <section className="events-list section-margins">
      {events.sort(sortNewestFirst).map((event, i) => {
        return <EventCard key={i} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
