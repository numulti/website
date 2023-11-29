import React from 'react';

const events = [
  {
    name: 'Interview and Resume Workshop',
    description: (
      <p>
        Are you applying to co-ops or internships? Join us on Wednesday to
        receive advice about how to tackle behavioural interviews! We will also
        be doing resume reviews, so feel free to bring your resume!
      </p>
    ),
    series: 'LEVEL-UP',
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
    series: 'LEVEL UP',
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
  {
    name: 'MULTI x ColorStack x United Health Group: Info Session and Resume Review',
    description: (
      <p>
        Join us for a collab between MULTI, ColorStack, and United Health Group!
        UHG employees will be joining us to talk about the company, answer
        quesitons, and conduct resume reviews!
      </p>
    ),
    series: 'Tech Talk',
    day: '15',
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
    name: 'Code For Cash: Leetcode',
    description: (
      <p>
        Join us for our Code For Cash competition! We will be hosting a Leetcode
        competition to enter a raffle for a cash prize!
      </p>
    ),
    series: 'Code For Cash',
    day: '29',
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
