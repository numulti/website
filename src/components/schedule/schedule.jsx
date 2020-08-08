import React from 'react';
import { DynamicLink } from '../global';
import { Grid } from '@material-ui/core';

import { CalendarIcon, ClockIcon, LocationIcon } from '../../assets/icons';
import schedule from '../../data/schedule';
import './schedule.css';

const ScheduleDetails = ({ text, icon }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={4}
      className="schedule-details-container"
    >
      <div className="schedule-details">
        {icon}
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
        <ScheduleDetails
          icon={<CalendarIcon />}
          text={`${frequency} on ${day}`}
        />
        <ScheduleDetails
          icon={<ClockIcon />}
          text={`${time.start} — ${time.end} EST`}
        />
        <ScheduleDetails
          icon={<LocationIcon />}
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
