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
          <h1>Meet the Team</h1>
          <br />
          <h2>Leadership Team</h2>
          <br />
          <TeamCards isAdvisors={false} />
          <br />
          <h2>Student Advisors</h2>
          <TeamCards isAdvisors={true} />
        </section>
      </Container>
    </div>
  );
};

export default TeamPage;
