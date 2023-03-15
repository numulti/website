import React from 'react';

const events = [
  {
    name: 'Code 4 Cash: SQL Detectives',
    description: (
      <p>
        Join us for our Code for Ca$h contest, where we will be learning 
        and using SQL! This is the perfect opportunity if you're interested 
        in learning the basics of databases and how to query them. We will 
        walk through a detective-themed scavenger hunt to compete for an 
        Amazon gift card! Boba will also be provided!
        <br></br>
        <b>Remember to bring your laptops!</b>
      </p>
    ),
    series: 'Code For Cash',
    day: '15',
    month: 'March',
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
    name: 'Tableau Workshop',
    description: (
      <p>
        We will be collaborating with ColorStackNEU and Data Club to give 
        an intro to Tableau! No experience is necessary.
      </p>
    ),
    series: 'Level Up',
    day: '22',
    month: 'March',
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
    name: 'Intro to Personal Websites',
    description: (
      <p>
        Want to learn how to create your own website? Join us for this workshop, 
        where we will introduce the basics of HTML and CSS!
      </p>
    ),
    series: 'Level Up',
    day: '29',
    month: 'March',
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
