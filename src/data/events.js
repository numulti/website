import React from 'react';

const events = [
  {
    name: 'Movie Night!',
    description: (
      <p>
        oin us this week for movie night, where we will be watching 
        Black Panther: Wakanda Forever! Snacks will be provided!
      </p>
    ),
    series: 'Coding 404',
    day: '08',
    month: 'February',
    year: '2023',
    time: {
      start: '6:30PM',
      end: '9:00PM',
    },
    location: {
      name: '144 Curry Student Center (CIE)',
    },
    cancelled: false,
  },
  {
    name: 'Intro to Data Viz',
    description: (
      <p>
        Learn how to visualize large datasets in Python using bar charts, 
        scatterplots, and line graphs!
      </p>
    ),
    series: 'Level Up',
    day: '15',
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
    name: 'Town Hall',
    description: (
      <p>
        Voice your opinions about Khoury's academics, extracurriculars, and 
        student life in an open environment!
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
];

export default events;
