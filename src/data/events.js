import React from 'react';

const events = [
  {
    name: 'Town Hall',
    description: (
      <p>
        Voice your opinions about Khoury's academics, extracurriculars, and
        student life in an open environment! Dunkin' Donuts will also be provided!
      </p>
    ),
    series: 'Town Hall',
    day: '22',
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
    name: 'MULTI x HackBeanpot',
    description: (
      <p>
        Join MULTI and HackBeanpot for an intro to hackathons!
      </p>
    ),
    series: 'Level Up',
    day: '01',
    month: 'March',
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
    name: 'Code For Cash: SQL',
    description: (
      <p>
        Our semesterly event will be introducing SQL along with a friendly 
        competition using the application!
      </p>
    ),
    series: 'Code For Cash',
    day: '15',
    month: 'March',
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
