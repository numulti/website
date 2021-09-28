import React from 'react';

const events = [
  {
    name: 'Day in the Life at Hubspot',
    series: 'Tech Talk',
    description: (
      <p>
        Join us with HubSpot this Wednesday to learn more about the company,
        employees, and their values. Hear from an engineer + PM about their
        projects and career journey to their current positions and learn about
        D&I initiatives at the company from a recruiter.
      </p>
    ),
    day: '29',
    month: 'September',
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
    name: 'Capital One',
    series: 'Tech Talk',
    description: (
      <p>
        Feeling unsure about the interview process? Join us with a Capital One
        recruiter to learn more about both behavioral and technical interviews!
      </p>
    ),
    day: '6',
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
