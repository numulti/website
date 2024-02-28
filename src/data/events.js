import React from 'react';

const events = [
  {
    name: 'Level Up',
    description: (
      <p>
        Join us for an engaging Leetcode practice session where we will be
        solving problems together and discussing the best approaches to solve them.
        Here you will have the opportunity to bolster your problem solving skills
        and learn from your peers. 
      </p>
    ),
    series: 'Community Leetcode Practice',
    day: '28',
    month: 'February',
    year: '2024',
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
    name: 'Effects of Music',
    description: (
      <p>
        Join us on for our meeting centered around music and its abiltiy to
        improve mental health, support community building skills and its general
        promotion of cohesion through activity.
      </p>
    ),
    series: 'Breaking the Stigma',
    day: '21',
    month: 'February',
    year: '2024',
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
    name: 'Tech Talk w/ Neel Jawaid',
    description: (
      <p>
        Join us for a talk with Neel Jawaid, a designer at Google, as
        he discusses his journey through the tech industry and how he has
        navigated the challenges he has faced.
      </p>
    ),
    series: 'Tech Talk',
    day: '31',
    month: 'January',
    year: '2024',
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
