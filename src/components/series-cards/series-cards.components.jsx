import React from 'react';
import { Grid } from '@material-ui/core';

import { Emoji } from '../global';
import './series-cards.styles.css';

const SeriesCards = ({ series }) => {
  return (
    <section className="series-cards">
      <Grid
        container
        direction="row"
        spacing={4}
        alignItems="stretch"
        justify="center"
      >
        {series.map((type, i) => {
          const { name, description, emoji } = type.node;
          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={3}>
              <div className="card">
                <div className="series-cards-icon">
                  <Emoji symbol={emoji} />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default SeriesCards;
