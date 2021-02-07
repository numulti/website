import React from 'react';

const events = [
  {
    name: 'Remote Co-op Experience with Synopsys',
    series: 'Tech Talk',
    description: (
      <p>
        Learn how to make the best of your remote co-op and navigate
        complications of the ongoing pandemic.
      </p>
    ),
    day: '10',
    month: 'February',
    year: '2021',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Zoom Video Call',
      url: 'https://northeastern.zoom.us/j/99313290657',
    },
    cancelled: false,
  },
  {
    name: 'MULTI x Capital One',
    series: 'Tech Talk',
    description: <p></p>,
    day: '24',
    month: 'February',
    year: '2021',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    photo: 'event-02-10-2021.png',
    location: {
      name: 'Zoom Video Call',
      url: 'https://northeastern.zoom.us/j/99313290657',
    },
    cancelled: false,
  },
];

export default events;
