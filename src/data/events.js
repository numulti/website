import React from 'react';

const events = [
  {
    name: 'Event Name',
    series: 'Series Name',
    description: (
      <p>
        description with embedded HTML for{' '}
        <a href="https://google.com">Link support</a>. description with embedded
        HTML. description with embedded HTML. description with embedded HTML.
        description with embedded HTML.
      </p>
    ),
    day: '1',
    month: 'September',
    year: '2020',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Zoom Video Call',
      url: 'https://zoom.com',
    },
    cancelled: false,
  },
  {
    name: 'Event Name 2',
    series: 'Series Name',
    description: (
      <p>
        description with embedded HTML for{' '}
        <a href="https://google.com">Link support</a>. description with embedded
        HTML. description with embedded HTML. description with embedded HTML.
        description with embedded HTML.
      </p>
    ),
    day: '1',
    month: 'January',
    year: '2020',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Zoom Video Call',
      url: 'https://zoom.com',
    },
    cancelled: false,
  },
  {
    name: 'Event Name',
    series: 'Series Name',
    description: (
      <p>
        description with embedded HTML for{' '}
        <a href="https://google.com">Link support</a>. description with embedded
        HTML. description with embedded HTML. description with embedded HTML.
        description with embedded HTML.
      </p>
    ),
    day: '25',
    month: 'August',
    year: '2020',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Zoom Video Call',
      url: 'https://zoom.com',
    },
    cancelled: true,
  },
  {
    name: 'Event Name',
    series: 'Series Name',
    description: (
      <p>
        description with embedded HTML for{' '}
        <a href="https://google.com">Link support</a>. description with embedded
        HTML. description with embedded HTML. description with embedded HTML.
        description with embedded HTML.
      </p>
    ),
    day: '25',
    month: 'July',
    year: '2021',
    time: {
      start: '6:00PM',
      end: '7:00PM',
    },
    location: {
      name: 'Zoom Video Call',
      url: 'https://zoom.com',
    },
    cancelled: false,
  },
];

export default events;
