import React from 'react';
import Img from 'gatsby-image';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { DynamicLink } from '../../components/global';
import './team-cards.styles.css';

const ContactButton = ({ link, faIcon }) => (
  <DynamicLink to={link} className="team-cards-contact-btn-container">
    <button className="team-cards-contact-btn">
      <FontAwesomeIcon icon={faIcon} />
    </button>
  </DynamicLink>
);

const TeamCards = ({ team }) => {
  return (
    <section className="team-cards">
      <Grid container direction="row" spacing={5} alignItems="stretch">
        {team.map((member, i) => {
          const { name, role, about, image, fields, contact } = member.node;
          console.log(contact);
          return (
            <Grid item key={i} xs={12} sm={12} md={6} lg={4} xl={3}>
              <div className="card">
                {
                  // Render only if image src is valid to prevent website from breaking
                  !!image.src && (
                    <div className="team-cards-img-container">
                      <Img fluid={fields.image.childImageSharp.fluid} />
                    </div>
                  )
                }
                <div className="team-cards-text">
                  <h4>{name}</h4>
                  {role !== 'Student Advisor' && <h5>{role}</h5>}
                  <p>{about}</p>
                </div>
                <div className="team-cards-contact-btns-row">
                  {!!contact.email && (
                    <ContactButton
                      link={`mailto:${contact.email}`}
                      faIcon={faEnvelope}
                    />
                  )}
                  {!!contact.website && (
                    <ContactButton link={contact.website} faIcon={faLink} />
                  )}
                  {!!contact.linkedin && (
                    <ContactButton
                      link={contact.linkedin}
                      faIcon={faLinkedin}
                    />
                  )}

                  {!!contact.github && (
                    <ContactButton link={contact.github} faIcon={faGithub} />
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
