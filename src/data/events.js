import React from 'react';

const events = [
  {
    name: 'Game Night',
    series: 'Coding 404',
    description: (
      <p>
        Take a break from classes this week and join us for a fun night of
        Quiplash games and socializing this Wednesday!
      </p>
    ),
    day: '10',
    month: 'March',
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
    name: 'Interview Bias',
    series: 'Breaking the Stigma',
    description: (
      <p>
        Join our discussion on our experiences with interview bias, as well as
        how to identify and overcome the unconscious bias that employers can
        have in the hiring process.
      </p>
    ),
    day: '17',
    month: 'March',
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
];

export default events;
