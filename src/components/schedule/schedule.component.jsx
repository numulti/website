import React from 'react';
import { DynamicLink } from '../global';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import schedule from '../../data/schedule';
import './schedule.styles.css';

const ScheduleDetails = ({ faIcon, text }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="schedule-details-container">
      <div className="schedule-details">
        <FontAwesomeIcon icon={faIcon} />
        <p>{text}</p>
      </div>
    </Grid>
  );
};

const Schedule = () => {
  const { semester, year, frequency, day, time, location } = schedule;
  return (
    <div className="schedule section-margins">
      <h3>
        {semester} {year} Events
      </h3>
      <Grid container direction="row">
        <ScheduleDetails faIcon={faCalendar} text={`${frequency} on ${day}`} />
        <ScheduleDetails
          faIcon={faClock}
          text={`${time.start} — ${time.end} EST`}
        />
        <ScheduleDetails
          faIcon={faMapMarkerAlt}
          text={
            !!location.url ? (
              <DynamicLink to={location.url}>{location.name}</DynamicLink>
            ) : (
              location.name
            )
          }
        />
      </Grid>
    </div>
  );
};

export default Schedule;
