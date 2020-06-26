import styled from 'styled-components';

const fontFamily = (props) =>
  props.pretty
    ? `font-family: "Playfair Display"; font-style: italic; font-weight: 500;`
    : `font-family: "Nunito";`;

const PrimaryHeading = styled.h1`
  ${fontFamily}
`;

const SecondaryHeading = styled.h2`
  ${fontFamily}
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  font-family: 'Nunito';
  ${(props) => (props.strong ? `font-weight: 600;` : '')}
`;

export { PrimaryHeading, SecondaryHeading, Paragraph };
