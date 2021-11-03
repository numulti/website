import React from 'react';

const events = [
  {
    name: 'Town Hall',
    series: 'Town Hall',
    description: (
      <p>
        Attend our semesterly town hall and voice your suggestions regarding
        Khoury College’s academics, extracurricular activities, student life,
        and more, all in a relaxed and friendly environment with yummy Insomnia
        cookies! Your thoughts and ideas will be passed on to the administration
        through our E-Board so that we can help Khoury improve our academic
        experience!
      </p>
    ),
    day: '3',
    month: 'November',
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
    name: 'Registration 101',
    series: 'Coding 404',
    description: (
      <p>
        Got any questions about courses, class sections, and the registration
        process for Spring 2021? Hear from MULTI and upperclassmen to get the
        recommendations you need!
      </p>
    ),
    day: '10',
    month: 'November',
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
