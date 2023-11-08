import React from 'react';

const events = [
  {
    name: 'MULTI x CarGurus: Tech Talk',
    description: (
      <p>
        Are you interested in working at CarGurus, or are you just curious about how to approach interviews?
        Join us for a tech talk with CarGurus, where developers and recuiters will be sharing information about the company also giving advice on how to approach interviews.
      </p>
    ),
    series: 'Tech Talk',
    day: '25',
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
  {
    name: 'MULTI x Oasis: Intro to App Development',
    description: (
      <p>
        Want to learn App Development? Join MULTI and Oasis for an engaging workshop where
        you can dive into the world of app development and turn your creative
        app ideas into reality. Don't miss out on this opportunity to level up
        your coding expertise!
      </p>
    ),
    series: 'Coding 404',
    day: '25',
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
  {
    name: 'Interview and Resume Workshop',
    description: (
      <p>
        Are you applying to co-ops or internships? Join us on Wednesday to receive advice
        about how to tackle behavioural interviews! We will also be doing resume reviews, so feel free to bring your resume!
      </p>
    ),
    series: '',
    day: '1',
    month: 'November',
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
    name: 'C4C x MULTI: Intro to Personal Projects',
    description: (
      <p>
        Join Code4Community and MULTI for our personal projects workshop, where
        we will go over the fundamentals of building personal projects for
        resumes. We will go over example projects, brainstorming ideas, typical
        tech stacks, and how to get started.
      </p>
    ),
    series: 'LEVEL-UP',
    day: '8',
    month: 'November',
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
