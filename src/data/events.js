import React from 'react';

const events = [
  {
    name: "Day in the Life @ Google",
    description: (
      <p>
        Considered what it would be like to work at Google? Join us this Wednesday
        to learn about the life of a Software Engineer and Product Manager at Google!
        They'll talk about day to day activities, perks of the job and answer all your
        questions about working at one of the biggest tech companies in the world!
        <br></br>
        Open to undergrads only
        <br></br>
        Make sure to <a href="https://nam12.safelinks.protection.outlook.com/?
        url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3D
        f179c428c7e94394bedbba399%26id%3Dc8e4872069%26e%3Da05f19151d&data=05%7
        C01%7Cgoel.la%40northeastern.edu%7Cb89b11e7278f453ac70a08dab0a50009%7C
        a8eec281aaa34daeac9b9a398b9215e7%7C0%7C0%7C638016519962846963%7CUnknown
        %7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJX
        VCI6Mn0%3D%7C3000%7C%7C%7C&sdata=E8YTA6O9pl7dBCxzAYAlFOEFgt3Dh2rSibTgFU
        fLGs4%3D&reserved=0">RSVP</a> for the event!
        <br></br>
        Presenters:
        <br></br>
        Kenny Sulaimon, Product Manager
        <br></br>
        Kurt Marcinkiewicz, Software Engineer
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
