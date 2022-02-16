import React from 'react';

const events = [
  {
    name: 'Technical Interview Worshop With Google!',
    description: (
      <p>
        Google has partnered with MULTI to put on a Technical Interviewing
        workshop!. During the event, you will hear recommendations from
        Northeastern alumni/current Googlers on succeeding in technical
        interviews, common mistakes to avoid, personal advice from our alumni on
        what helped them when they were interviewing, and then they will walk
        through some sample questions. They will also share current and future
        internship/full-time opportunities, with time for Q&A for the recruiter
        and alumni at the end!
      </p>
    ),
    series: 'Tech Talk',
    day: '16',
    month: 'February',
    year: '2022',
    time: {
      start: '7:00PM',
      end: '8:00PM',
    },
    location: {
      name: 'Google Meet',
      url: 'http://meet.google.com/ing-oxfa-bvw',
    },
    cancelled: false,
  },
];

export default events;
