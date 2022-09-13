import React from 'react';

const events = [
  {
    name: "Fall '22 Kickoff!",
    description: (
      <p>
        Celebrate fall semester with MULTI at our annual Fall kickoff! Meet the
        E-board, talk to new friends, and learn more about what we do as a club!
        Stick around for a fun game of Kahoot to win awesome prizes and eat some
        munchkins!
      </p>
    ),
    series: 'Kickoff',
    day: '14',
    month: 'September',
    year: '2022',
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
