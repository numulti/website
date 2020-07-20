import styled from 'styled-components';

const fontFamily = (props) =>
  props.pretty
    ? `font-family: "Playfair Display"; font-style: italic; font-weight: 500;`
    : `font-family: "Nunito";`;

const textAlign = (props) => (props.center ? `text-align: center` : '');

const LargeHeading = styled.h1`
  ${fontFamily}
  ${textAlign}
`;

const MediumHeading = styled.h2`
  ${fontFamily}
  ${textAlign}
`;

const SmallHeading = styled.h3`
  ${fontFamily}
  ${textAlign}
`;

export { LargeHeading, MediumHeading, SmallHeading };
