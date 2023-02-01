import React from 'react';

const events = [
  {
    name: 'Preparing for Co-Ops Panel',
    description: (
      <p>
        Listen and ask questions to current students who have already gone on
        their first or second co-op about their experiences and skills they
        learned while on co-op! Hear from a panel of Khoury students who have
        experience in areas such as Software Engineering, System Development,
        Back-End, Front-End/Design, Data Science, and more!
      </p>
    ),
    series: 'Tech Talk',
    day: '01',
    month: 'February',
    year: '2023',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: '144 Curry Student Center (CIE)',
    },
    cancelled: false,
  },
  {
    name: 'Movie Night!',
    description: (
      <p>
        Join us for a chill meeting where we will watch a movie of your choice
        and eat popcorn!
      </p>
    ),
    series: 'Coding 404',
    day: '08',
    month: 'February',
    year: '2023',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: '144 Curry Student Center (CIE)',
    },
    cancelled: false,
  },
];

export default events;
