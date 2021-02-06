import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';
import Schedule from '../../components/schedule/schedule';
import EventsList from '../../components/events/events-list/events-list';
import SeriesCards from '../../components/series-cards/series-cards';
import UpcomingEvents from '../../components/events/upcoming-events/upcoming-events';

const EventsPage = () => {
  return (
    <div id="events-page">
      <SEO title="Events" />
      <Container fixed>
        <section>
          <h1>Events</h1>
        </section>
        <section>
          <Schedule />
        </section>
        <section>
          <EventsList />
        </section>

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
