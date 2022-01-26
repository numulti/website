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
      name: 'West Village H 366',
    },
    cancelled: false,
  },
  {
    name: 'Resume Workshop With Cisco!',
    description: (
      <p>
        Cisco will be joining MULTI to provide helpful resume tips and how to
        build your digital presence! They will also review resumes so be sure to
        have a resume prepared!
      </p>
    ),
    series: 'Tech Talk',
    day: '2',
    month: 'February',
    year: '2022',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: 'West Village H 366',
    },
    cancelled: false,
  },
];

export default events;
