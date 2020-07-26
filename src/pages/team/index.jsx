import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '@material-ui/core';

import { SEO, SectionWrapper } from '../../components/global';
import TeamCards from '../../components/team-cards/team-cards.component';

const TeamPage = ({ data }) => {
  const { eboard, advisors } = data;
  return (
    <div id="team-page">
      <SEO title="Team" />
      <Container fixed>
        <h1>Meet the Team</h1>
        <SectionWrapper>
          <h2>Leadership Team</h2>
          <p>Description</p>
          <TeamCards team={eboard.edges} />
        </SectionWrapper>
        <SectionWrapper>
          {advisors.edges.length > 0 && (
            <>
              <h2>Student Advisors</h2>
              <p>Description</p>
              <TeamCards team={advisors.edges} />
            </>
          )}
        </SectionWrapper>
      </Container>
    </div>
  );
};

export const query = graphql`
  query {
    eboard: allTeamJson(filter: { role: { ne: "Student Advisor" } }) {
      edges {
        node {
          name
          role
          about
          image {
            src
          }
          fields {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    advisors: allTeamJson(filter: { role: { eq: "Student Advisor" } }) {
      edges {
        node {
          name
          role
          about
          image {
            src
          }
          fields {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TeamPage;
