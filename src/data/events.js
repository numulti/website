import React from 'react';

const events = [
  {
    name: 'Technical Interview Practice with PowerAdvocate',
    series: 'Tech Talk',
    description: (
      <p>
        Looking to brush up your skills for technical interviews? Join us with
        software engineers from PowerAdvocate to work in small groups of
        students to practice technical interview questions, and to learn more
        about their co-op program!
      </p>
    ),
    day: '13',
    month: 'October',
    year: '2021',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Center for Intercultural Engagement',
    },
    cancelled: false,
  },
  {
    name: 'Git/Github Workshop',
    series: 'Level Up',
    description: (
      <p>
        Want to learn more about how Git, one of the most useful tools for
        development, is used? Join us for a beginner-friendly, hands-on
        workshop, where we'll cover the fundamentals of Git, terminology, and
        source control, and how you can start using it by yourself or to work
        collaboratively with others!
      </p>
    ),
    day: '20',
    month: 'October',
    year: '2021',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Center for Intercultural Engagement',
    },
    cancelled: false,
  },
];

export default events;
