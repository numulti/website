import React from 'react';

const events = [
  {
    name: 'Class Registration & Info Session',
    description: (
      <p>
        Currently planning a schedule for the Fall semester? Join us for an 
        info session on class registration and co-ops! We'll be giving advice 
        on academic planning, common Khoury classes, and applying for co-op!
      </p>
    ),
    series: 'Coding 404',
    day: '05',
    month: 'April',
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
    name: 'Ethics with Professor Ricks',
    description: (
      <p>
        Professor Ricks will be speaking to us about machine learning and the 
        ethics of AI and ChatGPT. We will also have cookies!
      </p>
    ),
    series: 'Breaking the Stigma',
    day: '12',
    month: 'April',
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
    name: 'MULTI Picnic',
    description: (
      <p>
        Join us for our last meeting of the semester, where we will celebrate 
        with a picnic/potluck!
      </p>
    ),
    series: 'Coding 404',
    day: '19',
    month: 'April',
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
