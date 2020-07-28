import React from 'react';
import { Grid } from '@material-ui/core';

import { Emoji } from '../global';
import './series-cards.styles.css';

const SeriesCards = ({ series }) => {
  return (
    <section className="series-cards section-margins">
      <Grid
        container
        direction="row"
        spacing={6}
        alignItems="stretch"
        justify="center"
      >
        {series.map((type, i) => {
          const { name, description, emoji } = type.node;
          return (
            <Grid item key={i} xs={12} sm={6} md={6} lg={4} xl={4}>
              <div className="card">
                <div className="series-cards-icon">
                  <Emoji symbol={emoji} />
                </div>
                <div className="series-cards-text">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default SeriesCards;
