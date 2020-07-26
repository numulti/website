import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Grid } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';

import { DynamicLink, Emoji } from '../global';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ClockIcon,
  LocationIcon,
} from '../../assets';
import {
  useIsSmallScreen,
  isToday,
  isPastDate,
  getAbbrvMonth,
} from '../../utils';
import './event-card.styles.css';

const EventCard = ({ event }) => {
  const {
    name,
    series,
    description__html,
    day,
    month,
    year,
    time,
    location,
    cancelled,
  } = event.node;
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const isEventToday = isToday(`${month} ${day}, ${year}`);
  const isEventUpcoming = !isPastDate(`${month} ${day}, ${year}`);
  const isSmallScreen = useIsSmallScreen(); //used to reorder grid items

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const EventStatus = () => {
    if (cancelled) {
      return (
        <div className="event-card-status">
          <Emoji symbol={'🚫'} />
          Cancelled
        </div>
      );
    } else if (isEventToday) {
      return (
        <div className="event-card-status">
          <Emoji symbol={'🔥'} />
          Today
        </div>
      );
    } else if (isEventUpcoming) {
      return (
        <div className="event-card-status">
          <Emoji symbol={'⏳'} />
          Upcoming
        </div>
      );
    } else {
      return null;
    }
  };

  const EventCardDate = () => (
    <div className="event-card-date">
      <p>{day}</p>
      <p>{getAbbrvMonth(month)}</p>
      <p>{year}</p>
    </div>
  );

  const EventCardHeader = () => (
    <div className="event-card-header">
      <EventStatus />
      <div className="event-card-name">
        <h4>{series}</h4>
        <h3>{name} </h3>
      </div>
      <div className="event-card-time-loc-container">
        <div className="event-card-time-loc">
          <ClockIcon />
          <p>
            {time.start} — {time.end}
          </p>
        </div>
        <div className="event-card-time-loc">
          <LocationIcon />
          <p>
            {location.url ? (
              <DynamicLink to={location.url}>{location.name}</DynamicLink>
            ) : (
              location.name
            )}
          </p>
        </div>
      </div>
    </div>
  );

  const EventCardDescription = () => (
    <div className="event-card-description">
      {ReactHtmlParser(description__html)}
    </div>
  );

  return (
    <div
      className={`event-card card ${
        (cancelled || !isEventUpcoming) && !isAccordionOpen
          ? 'event-card-old'
          : ''
      }`}
      onClick={toggleAccordion}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <EventCardDate />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <EventCardHeader />
        </Grid>
        {isSmallScreen && (
          <Grid
            item
            xs={12}
            sm={12}
            className="event-card-description-container"
          >
            <CSSTransition
              in={isAccordionOpen}
              timeout={200}
              classNames="event-card-transition"
              unmountOnExit
            >
              <EventCardDescription />
            </CSSTransition>
          </Grid>
        )}
        <Grid
          item
          xs={isSmallScreen ? 12 : 3}
          sm={isSmallScreen ? 12 : 3}
          md={2}
          lg={2}
          className="chevron-toggle-container"
        >
          <button className="chevron-toggle" onClick={toggleAccordion}>
            {isAccordionOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </button>
        </Grid>
        {!isSmallScreen && (
          <CSSTransition
            in={isAccordionOpen}
            timeout={200}
            classNames="event-card-transition"
            unmountOnExit
          >
            <EventCardDescription />
          </CSSTransition>
        )}
      </Grid>
    </div>
  );
};

export default EventCard;
