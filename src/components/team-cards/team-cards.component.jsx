import React from 'react';
import Img from 'gatsby-image';
import { Grid } from '@material-ui/core';

import './team-cards.styles.css';

const TeamCards = ({ team }) => {
  return (
    <section className="team-cards">
      <Grid container direction="row" spacing={3} alignItems="stretch">
        {team.map((member, i) => {
          const { name, role, about, image, fields } = member.node;
          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={4} xl={3}>
              <div className="card">
                {
                  // Render only if image src is valid to prevent website from breaking
                  !!image.src && (
                    <Img fluid={fields.image.childImageSharp.fluid} />
                  )
                }
                <h4>{name}</h4>
                {role !== 'Student Advisor' && <h5>{role}</h5>}
                <p>{about}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default TeamCards;
