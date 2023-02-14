import React from 'react';

const events = [
  {
    name: 'Intro to Data Viz',
    description: (
      <p>
        Join us for an intro to Python! We will explain the importance of 
        data visualization and demonstrate how to use Python libraries to 
        customize visualizations using a mock dataset. Learn how to visualize 
        large datasets in Python using bar charts, scatterplots, and line 
        graphs! <b>Make sure to bring a laptop!</b> We will also have cookies!
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
  {
    name: 'MULTI x HackBeanpot: Intro to Hackathons',
    description: (
      <p>
        Join MULTI and HackBeanpot to learn about hackathons and how to 
        get the most out of them!
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
];

export default events;
