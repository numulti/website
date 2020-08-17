import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '@material-ui/core';

import { SEO, SectionWrapper } from '../../components/global';
import Schedule from '../../components/schedule/schedule';
import EventsList from '../../components/events-list/events-list';
import SeriesCards from '../../components/series-cards/series-cards';

const EventsPage = ({ data }) => {
  const { series, events } = data;

  const ScheduleSection = SectionWrapper(Schedule);

  const EventsListSection = SectionWrapper(
    <>
      <h2>Latest Events</h2>
      <EventsList events={events.edges} />
    </>
  );

  const SeriesCardsSection = SectionWrapper(
    <>
      <h2>Event Series</h2>
      <p>This is a Description</p>
      <SeriesCards series={series.edges} />
    </>
  );

  return (
    <div id="events-page">
      <SEO title="Events" />
      <Container fixed>
        <h1>Our Events</h1>
        <ScheduleSection />
        <EventsListSection />
        <SeriesCardsSection />
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
