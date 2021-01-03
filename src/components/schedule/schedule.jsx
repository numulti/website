import React from 'react';
import { Grid } from '@material-ui/core';

import DynamicLink from '../dynamic-link/dynamic-link';
import { CalendarIcon, ClockIcon, LocationIcon } from '../../assets/icons';
import schedule from '../../data/schedule';
import './schedule.css';

const ScheduleDetailsChip = ({ icon, text }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
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
      {/* <h3>
        {semester} {year} Events
      </h3> */}
      <Grid container direction="row">
        <ScheduleDetailsChip
          icon={<CalendarIcon />}
          text={`${frequency} on ${day}`}
        />
        <ScheduleDetailsChip
          icon={<ClockIcon />}
          text={`${time.start} — ${time.end} EST`}
        />
        <ScheduleDetailsChip
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
