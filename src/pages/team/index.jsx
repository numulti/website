import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';
import TeamCards from '../../components/team-cards/team-cards';

const TeamPage = () => {
  return (
    <div id="team-page">
      <SEO title="Team" />
      <Container fixed>
        <section>
          <h2>Leadership Team</h2>
          <p>Description</p>
          <TeamCards />
        </section>
      </Container>
    </div>
  );
};

export default TeamPage;
