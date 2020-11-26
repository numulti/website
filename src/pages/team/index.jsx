import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';
import TeamCards from '../../components/team-cards/team-cards';

const TeamPage = ({ data }) => {
  const { eboard, advisors } = data;

  return (
    <div id="team-page">
      <SEO title="Team" />
      <Container fixed>
        <section>
          <h2>Leadership Team</h2>
          <p>Description</p>
          <TeamCards team={eboard.edges} />
        </section>
        <section>
          <h2>Student Advisors</h2>
          <p>Description</p>
          <TeamCards team={advisors.edges} />
        </section>
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
          contact {
            email
            linkedin
            website
            github
          }
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
          contact {
            email
            linkedin
            website
            github
          }
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
