import React from 'react';

const events = [
  {
    name: 'Fall Kickoff',
    description: (
      <p>
        Celebrate a new semester with MULTI at our annual Fall Kickoff! Meet the
        e-board, learn more about the club, mingle with your peers, and meet
        some new friends!
      </p>
    ),
    day: '15',
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
];

export default events;
