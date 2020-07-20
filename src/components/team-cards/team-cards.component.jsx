import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './team-cards.styles.css';

export default function TeamCards() {
  return (
    <StaticQuery
      query={graphql`
        query {
          team: allTeamJson {
            edges {
              node {
                id
                name
                about
                image {
                  src
                }
                fields {
                  teamImage {
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
      `}
      render={(data) => (
        <div className='team-cards-grid'>
          {data.team.edges.map((member) => {
            return (
              <div key={member.node.id} className="team-card">
                <h4>{member.node.name}</h4>
                <h5>{member.node.about}</h5>
                <Img
                  fluid={member.node.fields.teamImage.childImageSharp.fluid}
                />
              </div>
            );
          })}
        </div>
      )}
    />
  );
}
