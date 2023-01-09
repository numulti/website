import React from 'react';

const events = [
  {
    name: 'Spring \'23 Kickoff',
    description: (
      <p>
        Celebrate fall semester with MULTI at our annual Spring kickoff! Meet the E-board,
        talk to new friends, and learn more about what we do as a club!
        <br></br>
        Open to <b>undergrads only</b>
        <br></br>
      </p>
    ),
    series: 'General',
    day: 'TBD',
    month: 'January',
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
