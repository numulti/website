import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid } from '@material-ui/core';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import SocialButton from '../social-button/social-button';
import './team-cards.css';

const TeamCards = ({ isAdvisors }) => {
  const { team } = useStaticQuery(
    graphql`
      query {
        team: allTeamJson {
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
    `
  );

  return (
    <section className="team-cards">
      <Grid container direction="row" spacing={4} alignItems="center">
        {team.edges
          .sort((a, b) => a.node.name > b.node.name)
          .filter((a) => {
            if (isAdvisors) {
              return a.node.role.toUpperCase() === 'STUDENT ADVISOR';
            } else {
              return a.node.role.toUpperCase() !== 'STUDENT ADVISOR';
            }
          })
          .map((member, i) => {
            const { name, role, image, fields, contact } = member.node;
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <div className="profile">
                  {!!image.src && (
                    <div className="team-cards-img-container">
                      <Img fluid={fields.image.childImageSharp.fluid} />
                    </div>
                  )}
                  <div className="team-cards-text">
                    <h4>{name}</h4>
                    <h5>{role}</h5>
                  </div>
                  <div className="team-cards-contact-btns-row">
                    {!!contact.email && (
                      <SocialButton
                        link={`mailto:${contact.email}`}
                        faIcon={faEnvelope}
                      />
                    )}
                    {!!contact.website && (
                      <SocialButton link={contact.website} faIcon={faLink} />
                    )}
                    {!!contact.linkedin && (
                      <SocialButton
                        link={contact.linkedin}
                        faIcon={faLinkedin}
                      />
                    )}

                    {!!contact.github && (
                      <SocialButton link={contact.github} faIcon={faGithub} />
                    )}
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </section>
  );
};

export default TeamCards;
