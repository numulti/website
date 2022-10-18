import React from 'react';

const events = [
  {
    name: 'Day in the Life @ Google',
    description: (
      <p>
        Considered what it would be like to work at Google? Join us this
        Wednesday to learn about the life of a Software Engineer and Product
        Manager at Google! They'll talk about day to day activities, perks of
        the job and answer all your questions about working at one of the
        biggest tech companies in the world!
        <br></br>
        Open to <b>undergrads</b> only
        <br></br>
        <a href="https://bit.ly/MxG-Fall22">
          Make sure to RSVP for the event!
        </a>
        <br></br>
        Presenters:
        <ul>
          <li>Kenny Sulaimon, Product Manager</li>
          <li>Kurt Marcinkiewicz, Software Engineer</li>
        </ul>
      </p>
    ),
    series: 'Tech Talks',
    day: '19',
    month: 'October',
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
