import React from 'react';
import { Container } from '@material-ui/core';

import { SEO, LargeHeading } from '../../components/global';
import TeamCard from '../../components/team-cards/team-cards.component';

const TeamPage = () => (
  <>
    <SEO title="Team" />
    <section className="container">
      <Container fixed>
        <LargeHeading pretty center>
          Team
        </LargeHeading>
        <TeamCard />
      </Container>
    </section>
  </>
);

export default TeamPage;
