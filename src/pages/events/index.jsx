import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';
import Schedule from '../../components/schedule/schedule';
import EventsList from '../../components/events/events-list/events-list';
import SeriesCards from '../../components/series-cards/series-cards';

const EventsPage = ({ data }) => {
  const { series, events } = data;

  return (
    <div id="events-page">
      <SEO title="Events" />
      <Container fixed>
        <h1>Our Events</h1>
        <section>
          <Schedule />
        </section>
        <section>
          <h2>Latest Events</h2>
          <EventsList events={events.edges} />
        </section>
        <section>
          <h2>Event Series</h2>
          <p>This is a Description</p>
          <SeriesCards series={series.edges} />
        </section>
      </Container>
    </div>
  );
};

export const query = graphql`
  query {
    series: allSeriesJson {
      edges {
        node {
          name
          description
          emoji
        }
      }
    }
    events: allEventsJson {
      edges {
        node {
          name
          series
          description__html
          day
          month
          year
          time {
            start
            end
          }
          location {
            name
            url
          }
          cancelled
        }
      }
    }
  }
`;

export default EventsPage;
