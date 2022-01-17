import React from 'react';

const events = [
  {
    name: 'Spring 22 Kickoff',
    description: (
      <p>
        Celebrate the new semester with MULTI at our annual Spring kickoff! Meet
        the e-board, mingle with friends and peers, and learn more about what we
        do as a club. Stick around for a fun Kahoot to win some cool prizes!
      </p>
    ),
    day: '26',
    month: 'January',
    year: '2022',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: 'Center for Intercultural Engagement',
    },
    cancelled: false,
  },
  {
    name: 'Welcome Week with MULTI!',
    description: (
      <p>
        Calling all new members: welcome to campus! Come meet some new faces at
        our Welcome Week event, where we'll have a variety of fun group
        activities to connect with your peers. Activity topics will include
        campus life, utilizing resources, and making the most out of your time
        at Northeastern!
      </p>
    ),
    day: '19',
    month: 'January',
    year: '2022',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: 'Center for Intercultural Engagement',
    },
    cancelled: false,
  },
];

export default events;
