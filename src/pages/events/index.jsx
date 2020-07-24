import React from 'react';
import { Container } from '@material-ui/core';

import { SEO } from '../../components/global';
import Schedule from '../../components/schedule/schedule.component';
import EventsList from '../../components/events-list/events-list.component';
import SeriesCards from '../../components/series-cards/series-cards.components';

const EventsPage = ({ data }) => {
  const { series, events } = data;
  return (
    <div id="events-page">
      <SEO title="Events" />
      <Container fixed>
        <h1>Our Events</h1>
        <Schedule />
        <EventsList events={events.edges} />
        <h2>Event Series</h2>
        <p>This is a Description</p>
        <SeriesCards series={series.edges} />
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
        }
      }
    }
  }
`;

export default EventsPage;
