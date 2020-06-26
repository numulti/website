import styled from 'styled-components';
import { logoColors } from './colors';

const fontFamily = (props) =>
  props.pretty
    ? `font-family: "Playfair Display"; font-style: italic; font-weight: 500;`
    : `font-family: "Nunito";`;

const textAlign = (props) => (props.center ? `text-align: center` : '');

const PrimaryHeading = styled.h1`
  ${fontFamily}
  ${textAlign}
`;

const SecondaryHeading = styled.h2`
  ${fontFamily}
  ${textAlign}
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  font-family: 'Nunito';
  ${textAlign}
  ${(props) => (props.strong ? `font-weight: 600;` : '')}
`;

const Link = styled.span`
  & > a {
    font-weight: 600;
    color: ${logoColors.commandLine};
  }
`;

export { PrimaryHeading, SecondaryHeading, Paragraph, Link as StyledLink };
