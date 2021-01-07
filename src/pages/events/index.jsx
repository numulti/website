import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';
import Schedule from '../../components/schedule/schedule';
import EventsList from '../../components/events/events-list/events-list';
import SeriesCards from '../../components/series-cards/series-cards';

const EventsPage = () => {
  return (
    <div id="events-page">
      <SEO title="Events" />
      <Container fixed>
        <h1>Events</h1>
        <section>
          <Schedule />
        </section>
        {/*<section>
          <h2>Latest Events</h2>
          <EventsList />
        </section>
        */}
        <section>
          <br />
          <h2>Event Series</h2>
          <SeriesCards />
        </section>
      </Container>
    </div>
  );
};

export default EventsPage;
