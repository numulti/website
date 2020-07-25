import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { DynamicLink, Emoji } from '../global';
import { useIsSmallScreen, isFutureDate, getAbbrvMonth } from '../../utils';
import './event-card.styles.css';

const ChevronUpIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </svg>
);

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
  const isUpcoming = isFutureDate(`${month} ${day}, ${year}`);
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
    } else if (isUpcoming) {
      return (
        <div className="event-card-status">
          <Emoji symbol={'🔥'} />
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
      <h4>{series}</h4>
      <h3>{name} </h3>
      <p>
        <FontAwesomeIcon icon={faClock} />
        {time.start} — {time.end}
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {location.url ? (
          <DynamicLink to={location.url}>{location.name}</DynamicLink>
        ) : (
          location.name
        )}
      </p>
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
        (cancelled || !isUpcoming) && !isAccordionOpen ? 'event-card-old' : ''
      }`}
      onClick={toggleAccordion}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className="event-card-date-container"
        >
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
