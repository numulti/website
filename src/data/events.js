import React from 'react';

const events = [
  {
    name: 'TBD',
    description: (
      <p>
        We'll be back in the fall semester, see you then!
      </p>
    ),
    series: 'Coding 404',
    day: '6',
    month: 'September',
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
    name: 'NER x MULTI Mixer',
    description: (
      <p>
        Join us for an exciting social mixer with Northeastern Electric Racing, where you can look forward to a fun-filled evening of activities, such as Human Bingo and more, and delicious catering. A perfect opportunity to make new friends and connections!
      </p>
    ),
    series: '',
    day: '27',
    month: 'September',
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
    name: 'Intro to App Development',
    description: (
      <p>
        Want to learn App Development? Join us for an engaging workshop where you can dive into the world of app development and turn your creative app ideas into reality. Don't miss out on this opportunity to level up your coding expertise!
      </p>
    ),
    series: 'Codign 404',
    day: '11',
    month: 'October',
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
