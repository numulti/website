import React from 'react';

const events = [
  {
    name: "Day in the Life @ HubSpot",
    description: (
      <p>
        Join us this week to hear about the experiences of those 
        working at HubSpot! Learn about the work software engineers 
        and product managers do! They will have an open panel discussion, 
        talk about diversity in the workplace, as well as list the current 
        opportunities they have for Fall co-ops!
      </p>
    ),
    series: 'Tech Talk',
    day: '25',
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
  {
    name: "Preparing for Co-Ops Panel",
    description: (
      <p>
        Listen and ask questions to current students who have already 
        gone on their first or second co-op about their experiences and 
        skills they learned while on co-op!
      </p>
    ),
    series: 'Tech Talk',
    day: '01',
    month: 'February',
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
